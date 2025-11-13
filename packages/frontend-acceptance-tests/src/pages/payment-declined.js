'use strict'

import Page from './page.js'
const logger = require('../lib/logger-utils.js')

class PaymentCancelled extends Page {
  async exitService () {
    await $('=Buy another licence').click()
    logger.info(`Exit Service`)
  }

  async retryPayment () {
    await $('.button').click()
    logger.info(`Retrying payment`)
  }
}

export default new PaymentCancelled('/govpay/failure')
