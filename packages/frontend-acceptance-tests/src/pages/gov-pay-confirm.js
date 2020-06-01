'use strict'

const assert = require('assert')
const { logger } = require('defra-logging-facade')
const Page = require('./page')

class GovPayConfirmPage extends Page {
  checkAndClickConfirmation () {
    $('#confirm').waitForDisplayed(1000)
    $('#confirm').click()
    logger.info(`On the Payment Confirmation page - Confirm clicked.......`)
  }
}
module.exports = new GovPayConfirmPage()
