'use strict'

const assert = require('assert')
const { logger } = require('defra-logging-facade')
const Page = require('./page')

class OrderConfirmPage extends Page {
  checkOrderConfirmationPage () {
    $('#permissionNumber').waitForDisplayed(1000)
    logger.info(`On the Permission Confirmation page - Order Complete`)
  }
}
module.exports = new OrderConfirmPage('/buy/number-of-rods')
