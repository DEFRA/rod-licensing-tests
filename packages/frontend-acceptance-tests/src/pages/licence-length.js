'use strict'

const { logger } = require('defra-logging-facade')

const Page = require('./page')

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

module.exports = new LicenceLengthPage('/buy/licence-length')
