import generateRecord, { AGE_RANGE } from '../src/generateRecord.js'
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
  });

  ([
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
    { random: 0.999, expectedAge: 100, ageRange: AGE_RANGE.SENIOR },
  ]).forEach(test => {
    const getExpectedRangeName = rangeId => 
      Object.entries(AGE_RANGE).find(ar => ar[1] == rangeId)[0]

    it(`generates a date of birth in ${getExpectedRangeName(test.ageRange || AGE_RANGE.ADULT)} range (expected age ${test.expectedAge})`, () => {
      try {
        sinon.stub(Math, 'random').callsFake(() => test.random)
        const { REC: { DOB } } = generateRecord(getNames(), getAddresses(), test.ageRange)
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
    it(`birthday is always yesterday (Date.now() set to ${test.date.format('DD-MM-YYYY')})`, () => {
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
  });
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
