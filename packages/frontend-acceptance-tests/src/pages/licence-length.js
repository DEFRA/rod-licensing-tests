import { logger } from 'defra-logging-facade'
import Page from './page'

class LicenceLengthPage extends Page {
  // Set the value of the radio button to 'yes' or 'no' depending on the data file value
  setLicenceDuration (licenceDuration) {
    logger.info(`Licence requested: ${licenceDuration}`)
    switch (licenceDuration) {
      case '1dayLicence':
        return $('#selector-1D').click()
      case '8dayLicence':
        return $('#selector-8D').click()
      case '12MonthLicence':
        return $('#selector-12M').click()
    }
  }
}

export default new LicenceLengthPage('/buy/licence-length')
