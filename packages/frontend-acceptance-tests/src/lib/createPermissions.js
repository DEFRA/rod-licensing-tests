import Dynamics from './dynamics-lib-import.js'

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

const getGlobalOptionSetValue = async (name, lookup) => {
  const llookup = lookup && lookup.toLowerCase()
  const definition = await Dynamics.retrieveGlobalOptionSets().cached()
  return definition[name] && lookup
    ? Object.values(definition[name].options).find(o => o.label.toLowerCase() === llookup || o.description.toLowerCase() === llookup)
    : undefined
}

const getEndDate = expiryDateSpec => {
  const endDate = new Date()
  if (expiryDateSpec === PERMISSION_EXPIRY.YESTERDAY) {
    endDate.setDate(endDate.getDate() - 1)
  } else if (expiryDateSpec === PERMISSION_EXPIRY.TOMORROW) {
    endDate.setDate(endDate.getDate() + 1)
  }
  return endDate
}

const getContact = async () => {
  const { Contact, findByExample } = Dynamics
  const birthDate = new Date()
  birthDate.setDate(birthDate.getDate() - 1)
  birthDate.setFullYear(birthDate.getFullYear() - 35)
  const licensee = new Dynamics.Contact()
  licensee.firstName = 'Homer'
  licensee.lastName = 'Simpson'
  licensee.birthDate = '1985-03-11T00:00:00.000Z'
  licensee.premises = '742'
  licensee.postcode = 'SF30 3SF'

  const candidates = await findByExample(licensee)
  if (candidates.length) {
    return candidates[0]
  }

  licensee.street = 'Evergreen Terrace'
  licensee.town = 'Springfield'
  licensee.country = await getGlobalOptionSetValue(Contact.definition.mappings.country.ref, 'GB')
  licensee.preferredMethodOfConfirmation = await getGlobalOptionSetValue(
    Contact.definition.mappings.preferredMethodOfConfirmation.ref,
    'Text'
  )
  licensee.preferredMethodOfNewsletter = await getGlobalOptionSetValue(Contact.definition.mappings.preferredMethodOfNewsletter.ref, 'Email')
  licensee.preferredMethodOfReminder = await getGlobalOptionSetValue(Contact.definition.mappings.preferredMethodOfReminder.ref, 'Letter')
  return licensee
}

const getPermit = async () => {
  const permits = await Dynamics.retrieveMultipleAsMap(Dynamics.Permit).cached()
  const permit = permits[Dynamics.Permit.definition.localCollection].filter(p => p.description === PERMIT)
  return permit.length ? permit[0] : undefined
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

export const createPermission = async (expiryDateSpec = PERMISSION_EXPIRY.TODAY) => {
  const endDate = getEndDate(expiryDateSpec)
  const startDate = new Date(endDate)
  startDate.setFullYear(startDate.getFullYear() - 1)

  const permission = new Dynamics.Permission()
  permission.issueDate = startDate.toISOString()
  permission.startDate = startDate.toISOString()
  permission.endDate = getEndDate(expiryDateSpec).toISOString()
  permission.referenceNumber = generateReferenceNumber(new Date(permission.endDate))
  const licensee = await getContact()
  permission.licensee = licensee
  const permit = await getPermit()
  permission.permitId = permit.id
  permission.bindToEntity(Dynamics.Permission.definition.relationships.licensee, licensee)
  permission.bindToEntity(Dynamics.Permission.definition.relationships.permit, permit)

  Dynamics.persist(licensee, permission)

  return permission
}
