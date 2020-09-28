'use strict'

const { logger } = require('defra-logging-facade')
const Page = require('./page')

class OrderConfirmPage extends Page {
  checkOrderConfirmationPage () {
    // TODO: Howard - talk to Graham and get him to add an ID with the permission number
    $('#permissionNumber').waitForDisplayed(1000)
    logger.info(`On the Permission Confirmation page - Order Complete`)
  }

  getPermissionNumber () {
    // TODO: Howard - talk to Graham and get him to add an ID with the permission number
    return $('div.govuk-panel--confirmation > div > strong').getText()
  }
}
module.exports = new OrderConfirmPage('/buy/order-complete')
