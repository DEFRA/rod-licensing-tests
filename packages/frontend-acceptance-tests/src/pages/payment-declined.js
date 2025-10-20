'use strict'

import { logger } from 'defra-logging-facade'
import Page from './page.js'

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
