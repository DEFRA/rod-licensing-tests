'use strict'

import Page from './page.js'
const logger = require('../lib/logger-utils.js')

class AddressPage extends Page {
  // Input data to house number and postcode depending on the data file value
  async setHouseNumberAndPostcode (setHouseNumber, setPostcode) {
    await $('#premises').setValue(setHouseNumber)
    logger.info(`House Number set as: ${setHouseNumber}`)
    await $('#postcode').setValue(setPostcode)
    logger.info(`Postcode set as: ${setPostcode}`)
  }

  async manuallyInputAddressLink () {
    await $('[href="/buy/address"]').click()
  }
}

export default new AddressPage('/buy/find-address')
