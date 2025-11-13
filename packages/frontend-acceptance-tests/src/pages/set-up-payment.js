'use strict'

import Page from './page.js'
const logger = require('../lib/logger-utils.js')

class SetUpPaymentPage extends Page {
  async setUpPaymentCheckbox () {
    await $("label[for='agree']").waitForDisplayed(1000)
    await $("label[for='agree']").click()
    info('Recurring payment checkbox selected')
  }
}

export default new SetUpPaymentPage('/buy/set-up-recurring-card-payment')