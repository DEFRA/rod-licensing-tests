'use strict'

import { logger } from 'defra-logging-facade.js'
import Page from './page.js'

class GovPayConfirmPage extends Page {
  async continue () {
    await $('#confirm').waitForDisplayed(1000)
    await $('#confirm').click()
    logger.info(`On the Payment Confirmation page - Confirm clicked.......`)
  }
}

export default new GovPayConfirmPage()
