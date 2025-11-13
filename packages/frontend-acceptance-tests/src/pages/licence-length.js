'use strict'

import Page from './page.js'
const logger = require('../lib/logger-utils.js')

class LicenceLengthPage extends Page {
  // Set the value of the radio button to 'yes' or 'no' depending on the data file value
  async setLicenceDuration (licenceDuration) {
   logger.info(`Licence requested: ${licenceDuration}`)
    switch (licenceDuration) {
      case '1dayLicence':
        return $('label[for="selector-1D"]').click()
      case '8dayLicence':
        return $('label[for="selector-8D"]').click()
      case '12MonthLicence':
        return $('label[for="selector-12M"]').click()
    }
  }
}

export default new LicenceLengthPage('/buy/licence-length')
