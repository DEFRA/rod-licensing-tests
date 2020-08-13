import generateTestFile from '../src/generateTestFile.js'
import generator from '../src/generateRecord.js'
import sinon from 'sinon'
import fs from 'fs'
import builder from 'xmlbuilder2'
import moment from 'moment'

describe('generateTestFile', () => {
  beforeEach(() => {
    sinon.stub(fs, 'writeFileSync')
  })

  afterEach(() => {
    fs.writeFileSync.restore()
  })

  it('writes a pocl-test-file by default', () => {
    generateTestFile()
    expect(fs.writeFileSync.firstCall.calledWith('pocl-test-file')).to.be.true
  })

  it('writes NewLicence as xml root', () => {
    expect(getXmlDoc().root().node.tagName).to.equal('NewLicence')
  })

  it('pretty prints the xml', () => {
    const end = sinon.spy()
    sinon.stub(builder, 'create').callsFake(() => ({
      end
    }))
    try {
      generateTestFile()
      expect(end.firstCall.args[0].prettyPrint).to.be.true
    } finally {
      builder.create.restore()
    }
  })

  describe('header node', () => {
    it('creates HDR node', () => {
      const doc = getXmlDoc()
      expect(doc.root().first().node.tagName).to.equal('HDR')
    })

    it('creates VER node in HDR', () => {
      expect(getHeaderChild('VER')).not.to.be.undefined
    })

    it('creates a version string in VER node', () => {
      expect(getHeaderChild('VER').node.textContent).to.equal('1.1')
    })

    it('creates a FN node in HDR', () => {
      expect(getHeaderChild('FN')).not.to.be.undefined
    });

    ([
      { date: moment('2019-05-12T13:22:11'), rand: 0.123456, uniq: '12345' },
      { date: moment('2018-10-30T18:21:59'), rand: 0.012345, uniq: '01234' },
      { date: moment('2020-02-28T20:20:20'), rand: 0.987654, uniq: '98765' },
      { date: moment('2020-06-28T11:28:46'), rand: 0.98, uniq: '98000' }
    ]).forEach(({ date, rand, uniq }) => {
      describe('creates FN in expected format', () => {
        let clock
        beforeEach(() => {
          clock = sinon.useFakeTimers({
            now: date.valueOf()
          })
          sinon.stub(Math, 'random').callsFake(() => rand)
        })

        afterEach(() => {
          clock.restore()
          Math.random.restore()
        })

        it('name matches expected format', () => {
          const filename = getHeaderChild('FN').node.textContent
          expect(/EAF1NewLicence[0-9]{13}\.xml/.test(filename)).to.be.true
        })

        it('name contains date', () => {
          const filename = getHeaderChild('FN').node.textContent
          const fileDate = filename.substring(14, 22)
          expect(fileDate).to.equal(date.format('YYYYMMDD'))
        })

        it('name contains unique section', () => {
          const filename = getHeaderChild('FN').node.textContent
          const fileUnique = filename.substring(22, 27)
          expect(fileUnique).to.equal(uniq)
        })
      })
    });

    it('creates a DATE node in HDR', () => {
      expect(getHeaderChild('DATE')).not.to.be.undefined
    });

    ([
      moment('2020-01-01T15:47:00'),
      moment('2020-03-15T08:31:29'),
      moment('2010-12-01T23:59:59')
    ]).forEach(date => {
      it(`adds today's date in DATE node, when today is ${date.format('DD/MM/YYYY HH:mm:ss')}`, () => {
        const clock = sinon.useFakeTimers({
          now: date.valueOf()
        })
        try {
          const HDR = getXmlDoc().root().first()
          const DATE = HDR.find(n => n.node.tagName == 'DATE')
          expect(moment(DATE.node.textContent, 'YYYYMMDD HH:mm:ss').diff(date)).to.equal(0)
        } finally {
          clock.restore()
        }
      })
    })

    it('creates FTYPE node in HDR', () => {
      expect(getHeaderChild('FTYPE')).not.to.be.undefined
    })

    it("FTYPE is always '1'", () => {
      expect(getHeaderChild('FTYPE').node.textContent).to.equal('1')
    })
  })

  describe('footer node', () => {
    it('creates footer node', () => {
      const doc = getXmlDoc()
      expect(doc.root().last().node.tagName).to.equal('TRL')
    })

    it('creates VER node in TRL', () => {
      expect(getFooterChild('VER')).not.to.be.undefined
    })

    it('creates a version string in VER node', () => {
      expect(getFooterChild('VER').node.textContent).to.equal('1.1')
    })

    it('creates TTXNS node in TRL', () => {
      expect(getFooterChild('TTXNS')).not.to.be.undefined
    })
  })

  describe('record nodes', () => {
    const fakeRecord = {
      REC: {
        LICENSEE_FORNAME: 'Michael',
        LICENSEE_SURNAME: 'Brown',
        LICENSEE_ADDRESS: {
          PREMISES: '65',
          STREET: 'Groveside Close',
          LOCALITY: 'Carshalton',
          TOWN: 'Barnet',
          POSTCODE: 'PL5 2AA'
        },
        PERMIT_TYPE: 'Salmon 12 month 1 Rod Licence (Full)',
        SEASON: 2020,
        DOB: '1968-07-22',
        AMOUNT: 82,
        MARKETING_FLAG: false
      }
    }
    beforeEach(() => {
      sinon.stub(generator, 'generateRecord').callsFake(() => fakeRecord)
    })

    afterEach(() => {
      generator.generateRecord.restore()
    })

    it('generates a single record by default', () => {
      expect(getRecordNodes().length).to.equal(1)
    })

    it('uses generateRecord to generate REC nodes', () => {
      sinon.stub(builder, 'create').callsFake(() => ({
        end: () => {}
      }))
      try {
        generateTestFile()
        const { NewLicence: { REC } } = builder.create.firstCall.args[0]
        expect(generator.generateRecord.calledOnce).to.be.true
        expect(REC).to.deep.equal(fakeRecord)  
      } finally {
        builder.create.restore()
      }
    })
  })
})

const getXmlDoc = () => {
  generateTestFile()
  const xml = fs.writeFileSync.firstCall.args[1]
  return builder.create(xml)
}

const getHeaderChild = nodeTagName => {
  const HDR = getXmlDoc().root().first()
  return HDR.find(n => n.node.tagName === nodeTagName)
}

const getFooterChild = nodeTagName => {
  const TRL = getXmlDoc().root().last()
  return TRL.find(n => n.node.tagName === nodeTagName)
}

const getRecordNodes = () => {
  return getXmlDoc().root().filter(n => n.node.tagName === 'REC')
}