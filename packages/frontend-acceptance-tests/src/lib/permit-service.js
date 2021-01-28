const dynamicsClient = require('./dynamics-client.js')
const { mapFields } = require('./dynamics-utils.js')

const permitTransformSpec = {
  defra_permitid: 'permitId',
  defra_name: 'description'
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

module.exports = {
  getPermit
}
