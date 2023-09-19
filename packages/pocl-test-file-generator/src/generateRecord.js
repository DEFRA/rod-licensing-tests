import moment from 'moment'

const getRandomElementFromArray = arr => arr[Math.floor(Math.random() * arr.length)]

const getRandomInteger = (min, max) => {
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
    .subtract(getRandomInteger(minAge, maxAge), 'years')
    .subtract(1, 'day')
}

const minAndMaxAgesForRange = Object.freeze({
  [AGE_RANGE.JUNIOR]: Object.freeze({ min: JUNIOR_MIN_AGE, max: JUNIOR_MAX_AGE }),
  [AGE_RANGE.ADULT]: Object.freeze({ min: JUNIOR_MAX_AGE + 1, max: SENIOR_MIN_AGE - 1 }),
  [AGE_RANGE.SENIOR]: Object.freeze({ min: SENIOR_MIN_AGE, max: 100 })
})

const getRandomNotification = email => {
  const weightedType = getRandomInteger(0, 9)
  if (weightedType <= 4) {
    // 40% email
    return {
      NOTIFY_EMAIL: 'Y',
      NOTIFY_EMAIL_ADDRESS: email
    }
  } else if (weightedType <= 8) {
    // 40% SMS
    return {
      NOTIFY_SMS: 'Y',
      NOTIFY_SMS_NUMBER: `0${getRandomInteger(1000000000, 999999999)}`
    }
  } else {
    // 20% post
    return {
      NOTIFY_POST: 'Y'
    }
  }
}

const getRandomContactMethod = email => {
  const weightedType = getRandomInteger(0, 9)
  if (weightedType <= 4) {
    // 40% email
    return {
      COMMS_EMAIL: 'Y',
      COMMS_EMAIL_ADDRESS: email
    }
  } else if (weightedType <= 8) {
    // 40% SMS
    return {
      COMMS_SMS: 'Y',
      COMMS_SMS_NUMBER: `0${getRandomInteger(1000000000, 999999999)}`
    }
  } else {
    // 20% post
    return {
      COMMS_POST: 'Y'
    }
  }
}

const getRandomCommsOption = email => {
  const commsOptions = getRandomInteger(0, 9)
  if (commsOptions <= 2) {
    return {
      COMMS_OPTION: 'Y',
      ...getRandomContactMethod(email)
    }
  } else {
    return {
      COMMS_OPTION: 'N'
    }
  }
}

const generator = {
  generateRecord: (names, addresses, licenceTypes, ageRange = AGE_RANGE.ADULT) => {
    const name = getRandomElementFromArray(names)
    const address = getRandomElementFromArray(addresses)
    const email = `${name.forename}.${name.surname}@mailinator.com`
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
          Premises: [1, 2, 3].map(x => (address[`address${x}`] ? `${address[`address${x}`]}, ` : '')).join(''),
          Address: address.address4,
          ContAddress: address.address5,
          TownCity: address.address6,
          CountyReg: address.address7,
          PostcodeZip: address.postCode,
          Country: 'England'
        },
        DOB: getRandomDateOfBirth(ageRange).format('YYYY-MM-DD'),
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
        LICENCE_CATEGORY: 'Salmon 12 month 1 Rod Licence (Full)',
        LICENCE_TYPE: getRandomElementFromArray(licenceTypes),
        MOPEX: getRandomInteger(1, 5),
        ...getRandomNotification(email),
        ...getRandomCommsOption(email)
      }
    }
  }
}
export default generator
