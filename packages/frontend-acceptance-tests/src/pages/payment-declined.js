'use strict'

const { logger } = require('defra-logging-facade')
const Page = require('./page')

class PaymentCancelled extends Page {
  exitService () {
    $('=Buy another licence').click()
    logger.info(`Exit Service`)
  }

  retryPayment () {
    $('.button').click()
    logger.info(`Retrying payment`)
  }
}

module.exports = new PaymentCancelled('/govpay/failure')
