'use strict'

const { logger } = require('defra-logging-facade')

const Page = require('./page')

class LicenceLengthPage extends Page {
  // Set the value of the radio button to 'yes' or 'no' depending on the data file value
  setLicenceDuration (licenceDuration) {
    logger.info(`Licence requested: ${licenceDuration}`)
    switch (licenceDuration) {
      case '1dayLicence':
        return this.click('#licence-length-3')
      case '8dayLicence':
        return this.click('#licence-length-2')
      case '12MonthLicence':
        return this.click('#licence-length')
    }
  }
}

module.exports = new LicenceLengthPage('/buy/licence-length')
