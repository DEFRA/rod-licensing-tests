'use strict'
const Page = require('./page')
const { logger } = require('defra-logging-facade')

class AddressPage extends Page {
  // Input data to house number and postcode depending on the data file value
  setHouseNumberAndPostcode (setHouseNumber, setPostcode) {
    $('#premises').setValue(setHouseNumber)
    logger.info(`House Number set as: ${setHouseNumber}`)
    $('#postcode').setValue(setPostcode)
    logger.info(`Postcode set as: ${setPostcode}`)
  }

  manuallyInputAddressLink () {
    $('[href="/buy/address"]').click()
  }
}
module.exports = new AddressPage('/buy/find-address')
