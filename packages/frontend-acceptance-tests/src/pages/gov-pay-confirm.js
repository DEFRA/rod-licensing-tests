'use strict'

import Page from './page.js'
import logger from '../utils/logger.js'

class GovPayConfirmPage extends Page {
  async continue () {
    await $('#confirm').waitForDisplayed(1000)
    await $('#confirm').click()
    logger.info(`On the Payment Confirmation page - Confirm clicked.......`)
  }
}

export default new GovPayConfirmPage()
