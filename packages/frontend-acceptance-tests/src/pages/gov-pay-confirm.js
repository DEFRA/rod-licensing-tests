'use strict'

const { logger } = require('defra-logging-facade')
const Page = require('./page')

class GovPayConfirmPage extends Page {
  continue () {
    $('#confirm').waitForDisplayed(1000)
    $('#confirm').click()
    logger.info(`On the Payment Confirmation page - Confirm clicked.......`)
  }
}
module.exports = new GovPayConfirmPage()
