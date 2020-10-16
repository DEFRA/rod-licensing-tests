import uuid from './stubbableUuid.js'
import { Permission, Contact, retrieveGlobalOptionSets } from '@defra-fish/dynamics-lib'

export const PERMISSION_EXPIRY = {
  YESTERDAY: -1,
  TODAY: 0,
  TOMORROW: 1
}

const getGlobalOptionSetValue = async (name, lookup) => {
  const llookup = lookup && lookup.toLowerCase()
  const definition = await retrieveGlobalOptionSets().cached()
  return definition[name] && lookup
    ? Object.values(definition[name].options).find(o => o.label.toLowerCase() === llookup || o.description.toLowerCase() === llookup)
    : undefined
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

export const createPermission = async (expiryDateSpec = PERMISSION_EXPIRY.TODAY) => {
  const endDate = getEndDate(expiryDateSpec)
  const startDate = new Date(endDate)
  startDate.setFullYear(startDate.getFullYear() - 1)
  const birthDate = new Date()
  birthDate.setDate(birthDate.getDate() - 1)
  birthDate.setFullYear(birthDate.getFullYear() - 25)

  const permission = new Permission()
  permission.issueDate = startDate.toISOString()
  permission.startDate = startDate.toISOString()
  permission.endDate = getEndDate(expiryDateSpec).toISOString()
  permission.permitId = uuid.v4()
  permission.referenceNumber = '11100420-2WT1SFT-KPMW2C'
  const licensee = new Contact()
  licensee.birthDate = birthDate.toISOString()
  licensee.firstName = 'Fester'
  licensee.lastName = 'Tester'
  licensee.email = 'person@example.com'
  licensee.mobilePhone = '+44 7700 900088'
  licensee.premises = 'Example House'
  licensee.street = 'Example Street'
  licensee.locality = 'Near Sample'
  licensee.town = 'Exampleton'
  licensee.postcode = 'AB12 3CD'
  licensee.country = await getGlobalOptionSetValue(Contact.definition.mappings.country.ref, 'GB')
  licensee.preferredMethodOfConfirmation = await getGlobalOptionSetValue(
    Contact.definition.mappings.preferredMethodOfConfirmation.ref,
    'Text'
  )
  licensee.preferredMethodOfNewsletter = await getGlobalOptionSetValue(Contact.definition.mappings.preferredMethodOfNewsletter.ref, 'Email')
  licensee.preferredMethodOfReminder = await getGlobalOptionSetValue(Contact.definition.mappings.preferredMethodOfReminder.ref, 'Letter')
  permission.licensee = licensee

  return permission

  /* return {
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
    },
    // concessions: [
    //   {
    //     id: 'd0ece997-ef65-e611-80dc-c4346bad4004',
    //     proof: {
    //       type: 'National Insurance Number',
    //       referenceNumber: 'AB 01 02 03 CD'
    //     }
    //   }
    // ],
    referenceNumber: '11100420-2WT1SFT-KPMW2C'
  } */
}
