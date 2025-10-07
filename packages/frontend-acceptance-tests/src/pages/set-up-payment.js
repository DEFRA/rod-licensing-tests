'use strict'

import Page from './page'
import { logger } from 'defra-logging-facade'

class SetUpPaymentPage extends Page {
  async setUpPaymentCheckbox () {
    await $("label[for='agree']").waitForDisplayed(1000)
    await $("label[for='agree']").click()
    logger.info('Recurring payment checkbox selected')
  }
}

export default new SetUpPaymentPage('/buy/set-up-recurring-card-payment')