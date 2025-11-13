'use strict'

import Page from './page.js'
const logger = require('../lib/logger-utils.js')

class LicenceFor extends Page {
  // Set the value of the radio button to 'yes' or 'no' depending on the data file value
  async setLicenceFor (licenceForInput) {
    logger.info(`Licence for: ${licenceForInput}`)
    if (licenceForInput === 'someone else') {
      return $('label[for="selector-someone-else"]').click()
    } else {
      return $('label[for="selector-you"]').click()
    }
  }
}

export default new LicenceFor('/buy/licence-for')
