const { v4 } = require('uuid')

const dynamicsClient = require('./dynamics-client.js')
const permitService = require('./permit-service.js')
const contactService = require('./contact-service.js')


const PERMISSION_EXPIRY = {
  YESTERDAY: -1,
  TODAY: 0,
  TOMORROW: 1
}

const dictionaries = [
  'ABCDEFGHJKLMNPQRSTUVWXYZ1234567890',
  'BCDFGHJKLM256789',
  'NPQRSTVWXZ256789',
  'BCDFGHJKLM256789',
  'ABCDEFGHJKLMNPQRSTUVWXYZ1234567890'
]

const PERMIT = 'Coarse 12 month 2 Rod Licence (Full)'

const getEndDate = expiryDateSpec => {
  const endDate = new Date()
  if (expiryDateSpec === PERMISSION_EXPIRY.YESTERDAY) {
    endDate.setDate(endDate.getDate() - 1)
  } else if (expiryDateSpec === PERMISSION_EXPIRY.TOMORROW) {
    endDate.setDate(endDate.getDate() + 1)
  }
  return endDate
}

const contactTransformSpec = {
  contactid: 'contactId',
  firstname: 'firstName',
  lastname: 'lastName',
  birthdate: 'birthDate',
  emailaddress1: 'email',
  mobilephone: 'mobilePhone',
  defra_preferredmethodofconfirmation: 'preferredMethodOfConfirmation',
  defra_preferredmethodofnewsletter: 'preferredMethodOfNewsletter',
  defra_preferredmethodofreminder: 'preferredMethodOfReminder'
}

const permitTransformSpec = {
  defra_permitid: 'permitId',
  defra_name: 'description'
}

const permissionTransformSpec = {
  defra_permissionid: 'permissionId',
  referenceNumber: 'defra_name',
  defra_issuedate: 'issueDate',
  defra_startdate: 'issueDate',
  defra_enddate: 'endDate',
  defra_stagingid: 'stagingId',
  defra_datasource: 'dataSource'
}

const mapFields = (data, transformSpec) => {
  const transformedData = {}
  for (const key in data) {
    if (transformSpec[key]) {
      transformedData[transformSpec[key]] = data[key]
    } else if (key.startsWith('defra_')) {
      transformedData[key.replace(/^defra_/, '')] = data[key]
    }
  }
  return transformedData
}

const createContact = () => {
  return dynamicsClient.createRequest({
    collection: 'contacts',
    contentId: v4(),
    entity: {
      birthdate: '1985-03-11',
      lastname: 'Simpson',
      firstname: 'Homer',
      emailaddress1: 'example@example.com',
      mobilephone: '07712345678',
      defra_premises: '742',
      defra_street: 'Evergreen Terrace',
      defra_locality: null,
      defra_town: 'Springfield',
      defra_postcode: 'SF30 3SF',
      defra_country: 910400184,
      defra_preferredmethodofconfirmation: 910400000,
      defra_preferredmethodofnewsletter: 910400000,
      defra_preferredmethodofreminder: 910400001
    },
    returnRepresentation: true
  })
}

const getOrCreateContact = async () => {
  const { value: records } = await dynamicsClient.retrieveRequest({
    collection: 'contacts',
    filter:
      "statecode eq 0 and firstname eq 'Homer' and lastname eq 'Simpson' and birthdate eq 1985-03-11 and defra_premises eq '742' and defra_postcode eq 'SF30 3SF'",
    select: [
      'contactid',
      'birthdate',
      'lastname',
      'firstname',
      'defra_premises',
      'defra_street',
      'defra_locality',
      'defra_town',
      'defra_postcode',
      'defra_country',
      'defra_preferredmethodofcontact',
      'defra_preferredmethodofnewsletter',
      'defra_preferredmethodofreminder'
    ]
  })

  if (records.length) {
    const contact = mapFields(records[0], contactTransformSpec)
    return contact
  } else {
    const createdContact = await createContact()
    const mappedContact = mapFields(createdContact, contactTransformSpec)
    return mappedContact
  }
}

const getPermit = async (fullPermitName) => {
  const { value: records } = await dynamicsClient.retrieveRequest({
    collection: 'defra_permits',
    filter:
      `statecode eq 0 and defra_name eq '${fullPermitName}'`,
    select: [
      'defra_permitid',
      'defra_name'
    ]
  })
  if (records.length) {
    const permit = mapFields(records[0], permitTransformSpec)
    return permit
  }
  return null
}

const calculateLuhn = value => {
  let factor = 2
  let sum = 0
  for (let i = value.length - 1; i >= 0; i--) {
    const addend = factor * (value[i].charCodeAt(0) - 48)
    factor = factor === 2 ? 1 : 2
    sum += Math.floor(addend / 10) + (addend % 10)
  }
  return (10 - (sum % 10)) % 10
}

const generateSequenceNumber = () => {
  let sequence = ''
  for (let x = 0; x < 5; x++) {
    const dict = dictionaries[x]
    sequence += dict[Math.floor(Math.random() * dict.length)]
  }
  return sequence
}

const generateReferenceNumber = endDate => {
  const block1 =
    endDate
      .getUTCHours()
      .toString()
      .padStart(2, '0') +
    endDate
      .getDate()
      .toString()
      .padStart(2, '0') +
    (endDate.getMonth() + 1).toString().padStart(2, '0') +
    endDate.getYear().toString()
  const block2 = '2WT3FHS' // to remain accurate, this depends on the permission details (number of rods, licence type, licensee name, etc) staying the same
  const block3 = generateSequenceNumber()
  const cs = calculateLuhn(`${block1}${block2}${block3}`)
  return `${block1}-${block2}-${block3}${cs}`
}

const createPermissionWithContactId = async (contactId, permitId, endDate, startDate, issueDate) => {
  const returnedPermission = await dynamicsClient.createRequest({
    collection: 'defra_permissions',
    contentId: v4(),
    entity: {
      defra_stagingid: v4(),
      defra_datasource:  910400003,
      defra_enddate: endDate.toISOString(),
      defra_startdate: startDate.toISOString(),
      defra_issuedate: issueDate.toISOString(),
      "defra_ContactId@odata.bind": `/contacts(${contactId})`,
      "defra_PermitId@odata.bind": `/defra_permits(${permitId})`,
      defra_name: generateReferenceNumber(endDate),
      statuscode: 1,
      statecode: 0
    },
    returnRepresentation: true
  })
  return mapFields(returnedPermission, permissionTransformSpec)
}

const createPermission = async (expiryDateSpec = PERMISSION_EXPIRY.TODAY) => {
  const endDate = getEndDate(expiryDateSpec)
  const startDate = new Date(endDate)
  startDate.setFullYear(startDate.getFullYear() - 1)

  const contact = await contactService.getOrCreateContact()
  const permit = await permitService.getPermit(PERMIT)  
  const permission = await createPermissionWithContactId(contact.contactId, permit.permitId, endDate, startDate, startDate)

  return {
    contact,
    permit,
    licence: permission
  }
}

module.exports = {
  createPermission
}