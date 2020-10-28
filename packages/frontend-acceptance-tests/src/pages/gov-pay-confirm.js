import { logger } from 'defra-logging-facade'
import Page from './page'

class GovPayConfirmPage extends Page {
  continue () {
    $('#confirm').waitForDisplayed(1000)
    $('#confirm').click()
    logger.info('On the Payment Confirmation page - Confirm clicked.......')
  }
}

export default new GovPayConfirmPage()
