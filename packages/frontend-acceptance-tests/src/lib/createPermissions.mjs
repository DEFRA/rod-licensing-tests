import { v4 } from 'uuid'
import { dynamicsClient } from './dynamics-client.mjs'
import { PERMIT, getPermit } from './permit-service.mjs'
import contactService from './contact-service.mjs'
import { mapFields } from './dynamics-utils.mjs'

const dictionaries = [
  'ABCDEFGHJKLMNPQRSTUVWXYZ1234567890',
  'BCDFGHJKLM256789',
  'NPQRSTVWXZ256789',
  'BCDFGHJKLM256789',
  'ABCDEFGHJKLMNPQRSTUVWXYZ1234567890'
]

const permissionTransformSpec = {
  defra_permissionid: 'permissionId',
  defra_name: 'referenceNumber',
  defra_issuedate: 'issueDate',
  defra_startdate: 'issueDate',
  defra_enddate: 'endDate',
  defra_stagingid: 'stagingId',
  defra_datasource: 'dataSource'
}

function calculateLuhn(value) {
  let factor = 2
  let sum = 0
  for (let i = value.length - 1; i >= 0; i--) {
    const addend = factor * (value[i].charCodeAt(0) - 48)
    factor = factor === 2 ? 1 : 2
    sum += Math.floor(addend / 10) + (addend % 10)
  }
  return (10 - (sum % 10)) % 10
}

function generateSequenceNumber() {
  let sequence = ''
  for (let x = 0; x < 5; x++) {
    const dict = dictionaries[x]
    sequence += dict[Math.floor(Math.random() * dict.length)]
  }
  return sequence
}

function generateReferenceNumber(endDate) {
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

async function createPermissionWithContactId(contactId, permitId, endDate, startDate, issueDate) {
  const returnedPermission = await dynamicsClient.createRequest({
    collection: 'defra_permissions',
    contentId: v4(),
    entity: {
      defra_stagingid: v4(),
      defra_datasource: 910400003,
      defra_enddate: endDate.toISOString(),
      defra_startdate: startDate.toISOString(),
      defra_issuedate: issueDate.toISOString(),
      'defra_ContactId@odata.bind': `/contacts(${contactId})`,
      'defra_PermitId@odata.bind': `/defra_permits(${permitId})`,
      defra_name: generateReferenceNumber(endDate),
      statuscode: 1,
      statecode: 0
    },
    returnRepresentation: true
  })
  return mapFields(returnedPermission, permissionTransformSpec)
}

export async function createPermission(
  expiryDateInput,
  permitInput = PERMIT.COARSE_12M_2_ROD_FULL,
  dateOfBirth,
  firstName,
  lastName,
  postalFulfilment
) {
  const endDate = new Date(expiryDateInput)
  const startDate = new Date(expiryDateInput)
  startDate.setFullYear(startDate.getFullYear() - 1)

  const contact = await contactService.getOrCreateContact(dateOfBirth, firstName, lastName, postalFulfilment)
  const permit = await getPermit(permitInput)
  const permission = await createPermissionWithContactId(contact.contactId, permit.permitId, endDate, startDate, startDate)

  return {
    contact,
    permit,
    licence: permission
  }
}
