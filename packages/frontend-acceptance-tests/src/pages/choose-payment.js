'use strict'

import Page from './page.js'
const logger = require('../lib/logger-utils.js')

class ChoosePaymentPage extends Page {
  // Set the value of the radio button to 'yes' or 'no' depending on the data file value
  async setChosenPayment (choosePaymentInput) {
    info(`Chosen payment: ${choosePaymentInput}`)
    if (choosePaymentInput === 'yes') {
      return $('label[for="selector-yes"]').click()
    } else {
      return $('label[for="selector-no"]').click()
    }
  }
}

export default new ChoosePaymentPage('/buy/choose-payment')