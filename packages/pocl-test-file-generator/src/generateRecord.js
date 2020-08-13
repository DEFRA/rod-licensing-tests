import moment from 'moment'

const getRandomElementFromArray = arr => arr[Math.floor(Math.random() * arr.length)]

const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const JUNIOR_MIN_AGE = 13
const JUNIOR_MAX_AGE = 16
const SENIOR_MIN_AGE = 65

export const AGE_RANGE = Object.freeze({
  JUNIOR: 1,
  ADULT: 2,
  SENIOR: 3
})

const getRandomDateOfBirth = ageRange => {
  const minAge = minAndMaxAgesForRange[ageRange].min
  const maxAge = minAndMaxAgesForRange[ageRange].max
  return moment().subtract(randomInteger(minAge, maxAge), 'years').subtract(1, 'day')  
}

const minAndMaxAgesForRange = Object.freeze({
  [AGE_RANGE.JUNIOR]: Object.freeze({ min: JUNIOR_MIN_AGE, max: JUNIOR_MAX_AGE }),
  [AGE_RANGE.ADULT]: Object.freeze({ min: JUNIOR_MAX_AGE + 1, max: SENIOR_MIN_AGE - 1 }),
  [AGE_RANGE.SENIOR]: Object.freeze({ min: SENIOR_MIN_AGE, max: 100 })
})

export default function generateRecord(names, addresses, ageRange = AGE_RANGE.ADULT) {
  const name = getRandomElementFromArray(names)
  const a = getRandomElementFromArray(addresses)

  return {
    REC: {
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
      DOB: getRandomDateOfBirth(ageRange).format('YYYY-MM-DD'),
      AMOUNT: 82,
      MARKETING_FLAG: false
    }
  }
}