'use strict'
const Page = require('./page')
const { logger } = require('defra-logging-facade')

class AddressPage extends Page {
  // Input data to house number and postcode depending on the data file value
  async setHouseNumberAndPostcode(setHouseNumber, setPostcode) {
    await $('#premises').setValue(setHouseNumber)
    logger.info(`House Number set as: ${setHouseNumber}`)
    await $('#postcode').setValue(setPostcode)
    logger.info(`Postcode set as: ${setPostcode}`)
  }

  async manuallyInputAddressLink() {
    await $('[href="/buy/address"]').click()
  }
}
module.exports = new AddressPage('/buy/find-address')
