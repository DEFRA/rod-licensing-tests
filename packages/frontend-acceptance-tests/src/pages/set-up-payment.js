'use strict'

const Page = require('./page')
const { logger } = require('defra-logging-facade')

class SetUpPaymentPage extends Page {
  async setUpPaymentCheckbox () {
    await $("label[for='agree']").waitForDisplayed(1000)
    await $("label[for='agree']").click()
    logger.info('Recurring payment checkbox selected')
  }
}
module.exports = new SetUpPaymentPage('/buy/set-up-recurring-card-payment')