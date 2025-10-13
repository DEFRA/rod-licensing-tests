'use strict'

import { v4 } from 'uuid'
import { dynamicsClient } from './dynamics-client.js'
import { mapFields } from './dynamics-utils.js'

const contactTransformSpec = {
  contactid: 'contactId',
  firstname: 'firstName',
  lastname: 'lastName',
  birthdate: 'birthDate',
  emailaddress1: 'email',
  mobilephone: 'mobilePhone',
  defra_preferredmethodofconfirmation: 'preferredMethodOfConfirmation',
  defra_preferredmethodofnewsletter: 'preferredMethodOfNewsletter',
  defra_preferredmethodofreminder: 'preferredMethodOfReminder',
  defra_postalfulfilment: 'postalFulfilment'
}

const createContact = async (dateOfBirth, firstName, lastName, postalFulfilment) => {
  return dynamicsClient.createRequest({
    collection: 'contacts',
    contentId: v4(),
    entity: {
      birthdate: dateOfBirth,
      lastname: lastName,
      firstname: firstName,
      emailaddress1: 'example@example.com',
      mobilephone: '07712345678',
      defra_premises: '742',
      defra_street: 'Evergreen Terrace',
      defra_locality: null,
      defra_town: 'Springfield',
      defra_postcode: 'SN15 3PG',
      defra_country: 910400184,
      defra_preferredmethodofconfirmation: 910400000,
      defra_preferredmethodofnewsletter: 910400000,
      defra_preferredmethodofreminder: 910400001,
      defra_postalfulfilment: postalFulfilment
    },
    returnRepresentation: true
  })
}

const getContact = async (dateOfBirth, firstName, lastName) => {
  return dynamicsClient.retrieveRequest({
    collection: 'contacts',
    filter: `statecode eq 0 and firstname eq '${firstName}' and lastname eq '${lastName}' and birthdate eq ${dateOfBirth} and defra_premises eq '742' and defra_postcode eq 'SN15 3PG'`,
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
      'defra_preferredmethodofreminder',
      'defra_postalfulfilment'
    ]
  })
}

const updateContact = async (key, postalFulfilment) => {
  return dynamicsClient.updateRequest({
    key,
    collection: 'contacts',
    entity: {
      defra_postalfulfilment: postalFulfilment
    },
    returnRepresentation: true,
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
      'defra_preferredmethodofreminder',
      'defra_postalfulfilment'
    ]
  })
}

const getOrCreateContact = async (dateOfBirth, firstName, lastName, postalFulfilment) => {
  const formatDate = dateOfBirth.format('YYYY-MM-DD')
  const { value: records } = await getContact(formatDate, firstName, lastName)

  if (records.length) {
    const updatedContact = await updateContact(records[0].contactid, postalFulfilment)
    const contact = mapFields(updatedContact, contactTransformSpec)
    return contact
  } else {
    const createdContact = await createContact(formatDate, firstName, lastName, postalFulfilment)
    const mappedContact = mapFields(createdContact, contactTransformSpec)
    return mappedContact
  }
}

export default { getOrCreateContact }
