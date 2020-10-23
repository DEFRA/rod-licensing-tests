import moment from 'moment'

const getRandomElementFromArray = arr => arr[Math.floor(Math.random() * arr.length)]

const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
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
  return moment()
    .subtract(randomInteger(minAge, maxAge), 'years')
    .subtract(1, 'day')
}

const minAndMaxAgesForRange = Object.freeze({
  [AGE_RANGE.JUNIOR]: Object.freeze({ min: JUNIOR_MIN_AGE, max: JUNIOR_MAX_AGE }),
  [AGE_RANGE.ADULT]: Object.freeze({ min: JUNIOR_MAX_AGE + 1, max: SENIOR_MIN_AGE - 1 }),
  [AGE_RANGE.SENIOR]: Object.freeze({ min: SENIOR_MIN_AGE, max: 100 })
})

const generator = {
  generateRecord: (names, addresses, ageRange = AGE_RANGE.ADULT) => {
    const name = getRandomElementFromArray(names)
    const a = getRandomElementFromArray(addresses)
    const startDate = moment().add(30, 'minutes')
    const CHANNEL_ID = `${Math.floor(Math.random() * 10 ** 5)
      .toString()
      .padStart(5, '0')}X`

    return {
      REC: {
        LICENSEE_FORNAME: name.forename,
        LICENSEE_SURNAME: name.surname,
        LICENSEE_ADDRESS: {
          Result: '10',
          Premises: [1, 2, 3].map(x => (a[`address${x}`] ? `${a[`address${x}`]}, ` : '')).join(''),
          Address: a.address4,
          ContAddress: a.address5,
          TownCity: a.address6,
          CountyReg: a.address7,
          PostcodeZip: a.postCode,
          Country: 'England'
        },
        DOB: getRandomDateOfBirth(ageRange).format('YYYY-MM-DD'),
        NOTIFY_EMAIL: 'Y',
        NOTIFY_EMAIL_ADDRESS: `${name.forename}.${name.surname}@mailinator.com`,
        START_DATE: startDate.format('DD/MM/YYYY'),
        START_TIME: startDate.format('HH:mm'),
        CHANNEL_ID,
        SERIAL_NO: `${CHANNEL_ID}-${Math.ceil(Math.random() * 9)}${Math.floor(Math.random() * 10)}-${Math.floor(Math.random() * 10 ** 8)
          .toString()
          .padEnd(8, '0')}`,
        AMOUNT: 82,
        SYSTEM_DATE: moment().format('DD/MM/YYYY'),
        SYSTEM_TIME: moment().format('HH:mm:ss'),
        ITEM_ID: '42372',
        COMMS_OPTION: 'N',
        LICENCE_CATEGORY: 'Salmon 12 month 1 Rod Licence (Full)',
        LICENCE_TYPE: ' ',
        MOPEX: 1
      }
    }
  }
}
export default generator
