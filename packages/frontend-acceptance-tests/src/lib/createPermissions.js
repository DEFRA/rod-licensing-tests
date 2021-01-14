import dynamicsClient from './dynamics-client.js'
import { v4 } from 'uuid'

export const PERMISSION_EXPIRY = {
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

// const getGlobalOptionSetValue = async (name, lookup) => {
//   const llookup = lookup && lookup.toLowerCase()
//   const definition = await Dynamics.retrieveGlobalOptionSets().cached()
//   return definition[name] && lookup
//     ? Object.values(definition[name].options).find(o => o.label.toLowerCase() === llookup || o.description.toLowerCase() === llookup)
//     : undefined
// }

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
  firstname: 'firstName',
  lastname: 'lastName',
  birthdate: 'birthDate',
  emailaddress1: 'email',
  mobilephone: 'mobilePhone',
  defra_preferredmethodofconfirmation: 'preferredMethodOfConfirmation',
  defra_preferredmethodofnewsletter: 'preferredMethodOfNewsletter',
  defra_preferredmethodofreminder: 'preferredMethodOfReminder'
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
  dynamicsClient.createRequest({
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
    }
  })
}

const getContact = async () => {
  const { value: records } = await dynamicsClient.retrieveRequest({
    collection: 'contacts',
    filter:
      "statecode eq 0 and firstname eq 'Homer' and lastname eq 'Simpson' and birthdate eq 1985-03-11 and defra_premises eq '742' and defra_postcode eq 'SF30 3SF'",
    select: [
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
    createContact()
  }

  return null

  // mappings
  // id: { field: 'contactid', type: 'string' },
  // firstName: { field: 'firstname', type: 'string' },
  // lastName: { field: 'lastname', type: 'string' },
  // birthDate: { field: 'birthdate', type: 'date' },
  // email: { field: 'emailaddress1', type: 'string' },
  // mobilePhone: { field: 'mobilephone', type: 'string' },
  // organisation: { field: 'defra_organisation', type: 'string' },
  // premises: { field: 'defra_premises', type: 'string' },
  // street: { field: 'defra_street', type: 'string' },
  // locality: { field: 'defra_locality', type: 'string' },
  // town: { field: 'defra_town', type: 'string' },
  // postcode: { field: 'defra_postcode', type: 'string' },
  // country: { field: 'defra_country', type: 'optionset', ref: 'defra_country' },
  // preferredMethodOfConfirmation: {
  //   field: 'defra_preferredmethodofconfirmation',
  //   type: 'optionset',
  //   ref: 'defra_preferredcontactmethod'
  // },
  // preferredMethodOfNewsletter: { field: 'defra_preferredmethodofnewsletter', type: 'optionset', ref: 'defra_preferredcontactmethod' },
  // preferredMethodOfReminder: { field: 'defra_preferredmethodofreminder', type: 'optionset', ref: 'defra_preferredcontactmethod' }

  // return {
  //   firstName: 'Homer',
  //   lastName: 'Simpson',
  //   birthDate: '1985-03-11T00:00:00.000Z',
  //   premises: '742',
  //   postcode: 'SF30 3SF'
  // }

  // const { Contact, findByExample } = Dynamics
  // const birthDate = new Date()
  // birthDate.setDate(birthDate.getDate() - 1)
  // birthDate.setFullYear(birthDate.getFullYear() - 35)
  // const licensee = new Dynamics.Contact()
  // licensee.firstName = 'Homer'
  // licensee.lastName = 'Simpson'
  // licensee.birthDate = '1985-03-11T00:00:00.000Z'
  // licensee.premises = '742'
  // licensee.postcode = 'SF30 3SF'

  // const candidates = await findByExample(licensee)
  // if (candidates.length) {
  //   return candidates[0]
  // }

  // licensee.street = 'Evergreen Terrace'
  // licensee.town = 'Springfield'
  // licensee.country = await getGlobalOptionSetValue(Contact.definition.mappings.country.ref, 'GB')
  // licensee.preferredMethodOfConfirmation = await getGlobalOptionSetValue(
  //   Contact.definition.mappings.preferredMethodOfConfirmation.ref,
  //   'Text'
  // )
  // licensee.preferredMethodOfNewsletter = await getGlobalOptionSetValue(Contact.definition.mappings.preferredMethodOfNewsletter.ref, 'Email')
  // licensee.preferredMethodOfReminder = await getGlobalOptionSetValue(Contact.definition.mappings.preferredMethodOfReminder.ref, 'Letter')
  // return licensee
}

// const getPermit = async () => {
//   const permits = await Dynamics.retrieveMultipleAsMap(Dynamics.Permit).cached()
//   const permit = permits[Dynamics.Permit.definition.localCollection].filter(p => p.description === PERMIT)
//   return permit.length ? permit[0] : undefined
// }

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

export const createPermission = async (expiryDateSpec = PERMISSION_EXPIRY.TODAY) => {
  const endDate = getEndDate(expiryDateSpec)
  const startDate = new Date(endDate)
  startDate.setFullYear(startDate.getFullYear() - 1)

  const permission = {
    issueDate: startDate.toISOString(),
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
    referenceNumber: generateReferenceNumber(new Date(endDate)),
    licensee: await getContact()
  }

  // const permit = await getPermit()
  // permission.permitId = permit.id
  // permission.bindToEntity(Dynamics.Permission.definition.relationships.licensee, licensee)
  // permission.bindToEntity(Dynamics.Permission.definition.relationships.permit, permit)

  // Dynamics.persist(licensee, permission)

  return permission
}
