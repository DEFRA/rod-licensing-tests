const { v4 } = require('uuid')

const dynamicsClient = require('./dynamics-client.js')
const { mapFields } = require('./dynamics-utils.js')

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

const getContact = async () => {
  return dynamicsClient.retrieveRequest({
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
}

const getOrCreateContact = async () => {
  const { value: records } = await getContact()

  if (records.length) {
    const contact = mapFields(records[0], contactTransformSpec)
    return contact
  } else {
    const createdContact = await createContact()
    const mappedContact = mapFields(createdContact, contactTransformSpec)
    return mappedContact
  }
}

module.exports = {
  getOrCreateContact
}
