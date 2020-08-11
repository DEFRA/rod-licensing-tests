import generateRecord from '../src/generateRecord.js'
import moment from 'moment'
import sinon from 'sinon'

describe('generate record tests', () => {
  it('gets a random name from provided name array', () => {
    const names = getNames()
    const { REC: r } = generateRecord(names, getAddresses())
    expect(names.some(n => n.forename === r.LICENSEE_FORNAME && n.surname === r.LICENSEE_SURNAME)).to.be.true
  });

  ([
    { addresses: [{ address1: 'Flat 1a', address2: 'Montague House', address3: '15' }], output: 'Flat 1a, Montague House, 15, ' },
    { addresses: [{ address1: '12', address2: 'Montague Terrace' }], output: '12, Montague Terrace, ' },
    { addresses: [{ address1: "Hannah's Cottage", address3: '3' }], output: "Hannah's Cottage, 3, " }
  ]).forEach(test => {
    it('concatenates address1, address2 and address3 to make premises', () => {
      const { REC: { LICENSEE_ADDRESS: { PREMISES: premises } }} = generateRecord(getNames(), test.addresses)
      expect(premises).to.equal(test.output)
    })    
  });

  it('gets a random address from provided address array', () => {
    const addresses = getAddresses()
    const { REC: { LICENSEE_ADDRESS: la } } = generateRecord(getNames(), addresses)
    expect(addresses.some(a => 
      la.PREMISES === [1,2,3].map(x => !!a[`address${x}`] ? `${a[`address${x}`]}, ` : '').join('') &&
      la.TOWN === a.address6 &&
      la.POSTCODE === a.postCode
    )).to.be.ok
  })

  it('sets DD_REFERENCE as a six-digit random number', () => {
    const { REC: { DD_REFERENCE }} = generateRecord(getNames(), getAddresses())
    expect(/^[0-9]{6}$/.test(DD_REFERENCE)).to.be.true
  });

// minor max age: 12
// junior max age: 16
// senior min age: 65

  ([
    { random: 0.999, expectedAge: 64 },
    { random: 0.001, expectedAge: 17 },
    { random: 0.438, expectedAge: 38 },
    { random: 0.644, expectedAge: 47 },
    { random: 0.925, expectedAge: 61 }
  ]).forEach(test => {
    it('generates a date of birth between 16 and 65 years old', () => {
      try {
        sinon.stub(Math, 'random').callsFake(() => test.random)
        const { REC: { DOB } } = generateRecord(getNames(), getAddresses())
        const age = moment().diff(moment(DOB, 'YYYY-MM-DD'), 'years')
        expect(age).to.equal(test.expectedAge)
      } finally {
        Math.random.restore()
      }
    })
  });

  ([
    { date: moment('2020-04-15') },
    { date: moment('2020-01-01') }
  ]).forEach(test => {
    it('birthday is always yesterday', () => {
      const clock = sinon.useFakeTimers({
        now: test.date.valueOf()
      })
      try {
        const { REC: { DOB } } = generateRecord(getNames(), getAddresses())
        const birthday = moment(DOB, 'YYYY-MM-DD')
        const yesterday = moment().subtract(1, 'day')
        expect(yesterday.month()).to.equal(birthday.month(), 'birthday month is wrong')
        expect(yesterday.date()).to.equal(birthday.date(), 'birthday date is wrong')
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
  { address1: '8', address2: 'Scott Street', address6: 'York', postCode: 'YO23 1NS', },
  { address1: '67', address2: 'The Mount', address6: 'York', postCode: 'YO24 1AX' },
  { address1: '3', address2: 'Vinery Road', address3: 'Burley', address6: 'Leeds', postCode: 'LS4 2LB' }
]