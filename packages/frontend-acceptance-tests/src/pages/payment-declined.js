'use strict'

import Page from './page.js'
import { info } from '../lib/logger-utils.js'

class PaymentCancelled extends Page {
  async exitService () {
    await $('=Buy another licence').click()
    info(`Exit Service`)
  }

  async retryPayment () {
    await $('.button').click()
    info(`Retrying payment`)
  }
}

export default new PaymentCancelled('/govpay/failure')
