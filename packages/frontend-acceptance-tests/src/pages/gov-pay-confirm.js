'use strict'

const { logger } = require('defra-logging-facade')
const Page = require('./page')

class GovPayConfirmPage extends Page {
  async continue() {
    await $('#confirm').waitForDisplayed(1000)
    await $('#confirm').click()
    logger.info(`On the Payment Confirmation page - Confirm clicked.......`)
  }
}
module.exports = new GovPayConfirmPage()
