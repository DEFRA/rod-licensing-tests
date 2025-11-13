'use strict'

import Page from './page.js'
const logger = require('../lib/logger-utils.js')

class AddressResults extends Page {
  // Set the radio button depending on data file value, and click continue
  async selectAddress () {
    await $('label[for="address"]').click()
    logger.info(`Address selected successfully`)
  }
}

export default new AddressResults('/buy/select-address')
