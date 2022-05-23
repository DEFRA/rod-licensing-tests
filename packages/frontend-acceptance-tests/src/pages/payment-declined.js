'use strict'

const { logger } = require('defra-logging-facade')
const Page = require('./page')

class PaymentCancelled extends Page {
  async exitService() {
    await $('=Buy another licence').click()
    logger.info(`Exit Service`)
  }

  async retryPayment() {
    await $('.button').click()
    logger.info(`Retrying payment`)
  }
}

module.exports = new PaymentCancelled('/govpay/failure')
