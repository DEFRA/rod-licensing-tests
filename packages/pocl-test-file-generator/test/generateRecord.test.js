import generator, { AGE_RANGE } from '../src/generateRecord.js'
import moment from 'moment'
import sinon from 'sinon'
const { generateRecord } = generator

describe('generate record tests', () => {
  it('gets a random name from provided name array', () => {
    const names = getNames()
    const { REC: r } = generateRecord(names, getAddresses(), getLicenceTypes())
    expect(names.some(n => n.forename === r.LICENSEE_FORNAME && n.surname === r.LICENSEE_SURNAME)).to.be.true
  })

  it('adds result node', () => {
    const {
      REC: {
        LICENSEE_ADDRESS: { Result: result }
      }
    } = generateRecord(getNames(), getAddresses(), getLicenceTypes())
    expect(result).to.equal('10')
  })

  it('freezes value of AGE_RANGE', () => {
    expect(() => {
      AGE_RANGE.ADULT = 4
    }).to.throw()
  })
  ;[
    { addresses: [{ address1: 'Flat 1a', address2: 'Montague House', address3: '15' }], output: 'Flat 1a, Montague House, 15, ' },
    { addresses: [{ address1: '12', address2: 'Montague Terrace' }], output: '12, Montague Terrace, ' },
    { addresses: [{ address1: "Hannah's Cottage", address3: '3' }], output: "Hannah's Cottage, 3, " }
  ].forEach(test => {
    it('concatenates address1, address2 and address3 to make premises', () => {
      const {
        REC: {
          LICENSEE_ADDRESS: { Premises: premises }
        }
      } = generateRecord(getNames(), test.addresses, getLicenceTypes())
      expect(premises).to.equal(test.output)
    })
  })
  ;[
    {
      address1: 'HALFWAY COTTAGE',
      address2: '15',
      address3: 'ELLOUGH ROAD',
      address4: 'ELLOUGH',
      address5: 'BECCLES',
      address6: 'EAST SUFFOLK',
      address7: 'SUFFOLK',
      postCode: 'NR34 7TG'
    },
    {
      address1: "HANNAH'S COTTAGE",
      address2: '3',
      address3: 'HIGH STREET',
      address4: 'STILLINGTON',
      address5: 'NR. EASINGWOLD',
      address6: 'YORK',
      address7: 'NORTH YORKSHIRE',
      postCode: 'YO61 1LG'
    }
  ].forEach(addr => {
    it('transforms address to match expected format', () => {
      const {
        REC: { LICENSEE_ADDRESS }
      } = generateRecord(getNames(), [addr], getLicenceTypes())
      expect(LICENSEE_ADDRESS).to.deep.equal({
        Result: '10',
        Premises: `${addr.address1}, ${addr.address2}, ${addr.address3}, `,
        Address: addr.address4,
        ContAddress: addr.address5,
        TownCity: addr.address6,
        CountyReg: addr.address7,
        PostcodeZip: addr.postCode,
        Country: 'England'
      })
    })
  })

  it('gets a random address from provided address array', () => {
    const addresses = getAddresses()
    const {
      REC: { LICENSEE_ADDRESS: addr }
    } = generateRecord(getNames(), addresses, getLicenceTypes())
    expect(
      addresses.some(
        a =>
          addr.Premises === [1, 2, 3].map(x => (a[`address${x}`] ? `${a[`address${x}`]}, ` : '')).join('') &&
          addr.PostcodeZip === a.postCode
      )
    ).to.be.ok
  })
  ;[
    { random: 0.999, expectedAge: 64 },
    { random: 0.001, expectedAge: 17 },
    { random: 0.438, expectedAge: 38 },
    { random: 0.644, expectedAge: 47 },
    { random: 0.925, expectedAge: 61 },
    { random: 0.001, expectedAge: 13, ageRange: AGE_RANGE.JUNIOR },
    { random: 0.25, expectedAge: 14, ageRange: AGE_RANGE.JUNIOR },
    { random: 0.49, expectedAge: 14, ageRange: AGE_RANGE.JUNIOR },
    { random: 0.5, expectedAge: 15, ageRange: AGE_RANGE.JUNIOR },
    { random: 0.749, expectedAge: 15, ageRange: AGE_RANGE.JUNIOR },
    { random: 0.75, expectedAge: 16, ageRange: AGE_RANGE.JUNIOR },
    { random: 0.999, expectedAge: 16, ageRange: AGE_RANGE.JUNIOR },
    { random: 0.001, expectedAge: 65, ageRange: AGE_RANGE.SENIOR },
    { random: 0.567, expectedAge: 85, ageRange: AGE_RANGE.SENIOR },
    { random: 0.8, expectedAge: 93, ageRange: AGE_RANGE.SENIOR },
    { random: 0.252, expectedAge: 74, ageRange: AGE_RANGE.SENIOR },
    { random: 0.999, expectedAge: 100, ageRange: AGE_RANGE.SENIOR }
  ].forEach(test => {
    const getExpectedRangeName = rangeId => Object.entries(AGE_RANGE).find(ar => ar[1] === rangeId)[0]

    it(`generates a date of birth in ${getExpectedRangeName(test.ageRange || AGE_RANGE.ADULT)} range (expected age ${
      test.expectedAge
    })`, () => {
      try {
        sinon.stub(Math, 'random').callsFake(() => test.random)
        const {
          REC: { DOB }
        } = generateRecord(getNames(), getAddresses(), getLicenceTypes(), test.ageRange)
        const age = moment().diff(moment(DOB, 'YYYY-MM-DD'), 'years')
        expect(age).to.equal(test.expectedAge)
      } finally {
        Math.random.restore()
      }
    })
  })
  ;[{ date: moment('2020-04-15') }, { date: moment('2020-01-01') }].forEach(test => {
    it(`birthday is always yesterday (Date.now() set to ${test.date.format('DD-MM-YYYY')})`, () => {
      const clock = sinon.useFakeTimers({
        now: test.date.valueOf()
      })
      try {
        const {
          REC: { DOB }
        } = generateRecord(getNames(), getAddresses(), getLicenceTypes())
        const birthday = moment(DOB, 'YYYY-MM-DD')
        const yesterday = moment().subtract(1, 'day')
        expect(yesterday.month()).to.equal(birthday.month(), 'birthday month is wrong')
        expect(yesterday.date()).to.equal(birthday.date(), 'birthday date is wrong')
      } finally {
        clock.restore()
      }
    })
  })

  it('Static fields are as expected', () => {
    const {
      REC: { AMOUNT, ITEM_ID, LICENCE_CATEGORY }
    } = generateRecord(getNames(), getAddresses(), getLicenceTypes())
    expect({
      AMOUNT,
      ITEM_ID,
      LICENCE_CATEGORY,
    }).to.deep.equal({
      AMOUNT: 82,
      ITEM_ID: '42372',
      LICENCE_CATEGORY: 'Salmon 12 month 1 Rod Licence (Full)',
    })
  });

  it('start date / time is in the future', () => {
    const clock = sinon.useFakeTimers({
      now: moment('2020-08-19T09:29:00.000').valueOf()
    })
    try {
      const {
        REC: { START_DATE, START_TIME }
      } = generateRecord(getNames(), getAddresses(), getLicenceTypes())
      const startDate = moment(`${START_DATE} ${START_TIME}`, 'DD/MM/YYYY HH:mm')
      expect(moment().isBefore(startDate)).is.true
    } finally {
      clock.restore()
    }
  })
  ;[0.01234, 0.00123, 0.98765, 0.45, 0.1234567].forEach(rand => {
    it(`CHANNEL_ID is five numeric characters followed by character 'X', where Math.random returns ${rand}`, () => {
      sinon.stub(Math, 'random').callsFake(() => rand)
      try {
        const {
          REC: { CHANNEL_ID }
        } = generateRecord(getNames(), getAddresses(), getLicenceTypes())
        expect(/[0-9]{5}X/.test(CHANNEL_ID)).is.true
      } finally {
        Math.random.restore()
      }
    })
  })
  ;[0.01234, 0.00123, 0.98765, 0.45, 0.123456789].forEach(rand => {
    it(`SERIAL_NO is CHANNEL_ID followed by two numeric sequences, where Math.random returns ${rand}`, () => {
      sinon.stub(Math, 'random').callsFake(() => rand)
      try {
        const {
          REC: { CHANNEL_ID, SERIAL_NO }
        } = generateRecord(getNames(), getAddresses(), getLicenceTypes())
        expect(new RegExp(`${CHANNEL_ID}\\-[1-9][0-9]?\\-[0-9]{8}`).test(SERIAL_NO)).is.true
      } finally {
        Math.random.restore()
      }
    })
  })
  ;[moment('2020-06-01T09:37:21.877Z'), moment('2019-12-31T11:59:59.000Z')].forEach(date => {
    it(`SYSTEM_DATE / SYSTEM_TIME are set to the current date / time (${date.format('YYYY-MM-DDTHH:mm:ss.SSS')})`, () => {
      const clock = sinon.useFakeTimers({
        now: date.valueOf()
      })
      try {
        const {
          REC: { SYSTEM_DATE, SYSTEM_TIME }
        } = generateRecord(getNames(), getAddresses(), getLicenceTypes())
        const systemDateTime = moment(`${SYSTEM_DATE} ${SYSTEM_TIME}`, 'DD/MM/YYYY HH:mm:ss')
        expect(date.diff(systemDateTime, 'seconds')).to.equal(0)
      } finally {
        clock.restore()
      }
    })
  })
})

const getNames = () => [
  { forename: 'Patrick', surname: 'Bamford' },
  { forename: 'Gjanni', surname: 'Alioski' },
  { forename: 'Kalvin', surname: 'Phillips' },
  { forename: 'Stuart', surname: 'Dallas' },
  { forename: 'Pablo', surname: 'Hernandez' }
]

const getAddresses = () => [
  {
    address1: '3',
    address2: '',
    address3: 'CAMBRIDGE COURT',
    address4: 'WRINGTON',
    address5: 'BRISTOL',
    address6: 'NORTH SOMERSET',
    address7: 'NORTH SOMERSET',
    postCode: 'BS40 5JL'
  },
  {
    address1: '4',
    address2: '',
    address3: 'MEADOW END COTTAGES',
    address4: 'SANDFORD',
    address5: 'CREDITON',
    address6: 'MID DEVON',
    address7: 'DEVON',
    postCode: 'EX17 4PH'
  },
  {
    address1: 'HALFWAY COTTAGE',
    address2: '15',
    address3: 'ELLOUGH ROAD',
    address4: 'ELLOUGH',
    address5: 'BECCLES',
    address6: 'EAST SUFFOLK',
    address7: 'SUFFOLK',
    postCode: 'NR34 7TG'
  }
]

const getLicenceTypes = () => [
  "Full Licence",
  "Senior Concession",
  "Disabled Concession",
  "Junior Concession"
]
