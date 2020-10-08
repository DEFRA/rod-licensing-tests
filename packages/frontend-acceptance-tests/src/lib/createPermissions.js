import uuid from './stubbableUuid.js'

export const PERMISSION_EXPIRY = {
  YESTERDAY: -1,
  TODAY: 0,
  TOMORROW: 1
}

const getEndDate = expiryDateSpec => {
  const today = new Date()
  if (expiryDateSpec === PERMISSION_EXPIRY.YESTERDAY) {
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)
    return yesterday
  } else if (expiryDateSpec === PERMISSION_EXPIRY.TOMORROW) {
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow
  }
  return today
}

export const createPermission = (expiryDateSpec = PERMISSION_EXPIRY.TODAY) => {
  const endDate = getEndDate(expiryDateSpec)
  const startDate = new Date(endDate)
  startDate.setFullYear(startDate.getFullYear() - 1)
  const birthDate = new Date()
  birthDate.setDate(birthDate.getDate() - 1)
  birthDate.setFullYear(birthDate.getFullYear() - 25)
  return {
    issueDate: startDate.toISOString(),
    startDate: startDate.toISOString(),
    endDate: getEndDate(expiryDateSpec).toISOString(),
    permitId: uuid.v4(),
    licensee: {
      birthDate: `${birthDate.getFullYear()}-${birthDate.getMonth() + 1}-${birthDate.getDate()}`,
      firstName: 'Fester',
      lastName: 'Tester',
      email: 'person@example.com',
      mobilePhone: '+44 7700 900088',
      premises: 'Example House',
      street: 'Example Street',
      locality: 'Near Sample',
      town: 'Exampleton',
      postcode: 'AB12 3CD',
      country: 'GB',
      preferredMethodOfConfirmation: 'Text',
      preferredMethodOfNewsletter: 'Email',
      preferredMethodOfReminder: 'Letter'
    }
    /* concessions: [
      {
        id: 'd0ece997-ef65-e611-80dc-c4346bad4004',
        proof: {
          type: 'National Insurance Number',
          referenceNumber: 'AB 01 02 03 CD'
        }
      }
    ], */
    /* referenceNumber: '11100420-2WT1SFT-KPMW2C' */
  }
}
