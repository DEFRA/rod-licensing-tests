'use strict'

const { logger } = require('defra-logging-facade')

const Page = require('./page')

class LicenceLengthPage extends Page {
  // Set the value of the radio button to 'yes' or 'no' depending on the data file value
  setLicenceDuration (licenceDuration) {
    logger.info(`Licence requested: ${licenceDuration}`)
    switch (licenceDuration) {
      case '1dayLicence':
        return $('#licence-length-3').click()
      case '8dayLicence':
        return $('#licence-length-2').click()
      case '12MonthLicence':
        return $('#licence-length').click()
    }
  }
}

module.exports = new LicenceLengthPage('/buy/licence-length')
