import Page from './page'
import { logger } from 'defra-logging-facade'

class AddressResults extends Page {
  // Set the radio button depending on data file value, and click continue
  selectAddress () {
    $('#address').click()
    logger.info('Address selected successfully')
  }
}

export default new AddressResults('/buy/select-address')
