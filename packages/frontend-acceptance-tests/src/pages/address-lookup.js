'use strict'
const Page = require('./page')
const { logger } = require('defra-logging-facade')

class AddressPage extends Page {
  // Input data to house number Set the value of the radio button to 'yes' or 'no' depending on the data file value
  setHouseNumberAndPostcode (setHouseNumber, setPostcode) {
    $('#premises').setValue(setHouseNumber)
    logger.info(`House Number set as: ${setHouseNumber}`)
    $('#postcode').setValue(setPostcode)
    logger.info(`Postcode set as: ${setPostcode}`)
  }

  manuallyInputAddressLink () {
    this.waitForElementVisible('.column-two-thirds>form>p>a', 1000)
    this.click('.column-two-thirds>form>p>a')
  }
}
module.exports = new AddressPage('/buy/find-address')
