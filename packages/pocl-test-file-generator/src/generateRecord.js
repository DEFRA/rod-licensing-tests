import moment from 'moment'

const getRandomElementFromArray = arr => arr[Math.floor(Math.random() * arr.length)]

const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const JUNIOR_MAX_AGE = 16
const SENIOR_MIN_AGE = 65

export default function generateRecord(names, addresses) {
  const name = getRandomElementFromArray(names)
  const a = getRandomElementFromArray(addresses)
  const dateOfBirth = moment().subtract(randomInteger(JUNIOR_MAX_AGE + 1, SENIOR_MIN_AGE - 1), 'years').subtract(1, 'day')

  return {
    REC: {
      DD_REFERENCE: Math.round(Math.random() * 10**6),
      LICENSEE_FORNAME: name.forename,
      LICENSEE_SURNAME: name.surname,
      LICENSEE_ADDRESS: {
        PREMISES: [1,2,3].map(x => !!a[`address${x}`] ? `${a[`address${x}`]}, ` : '').join(''),
        STREET: a.address4,
        LOCALITY: a.address5,
        TOWN: a.address6,
        POSTCODE:  a.postCode
      },
      PERMIT_TYPE: 'Salmon 12 month 1 Rod Licence (Full)',
      SEASON: 2020,
      DOB: dateOfBirth.format('YYYY-MM-DD'),
      AMOUNT: 82,
      MARKETING_FLAG: false
    }
  }
}