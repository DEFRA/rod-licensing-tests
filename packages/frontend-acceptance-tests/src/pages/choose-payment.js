'use strict'

const Page = require('./page')
const { logger } = require('defra-logging-facade')

class ChoosePaymentPage extends Page {
  // Set the value of the radio button to 'yes' or 'no' depending on the data file value
  async setChosenPayment (choosePaymentInput) {
    logger.info(`Chosen payment: ${choosePaymentInput}`)
    if (choosePaymentInput === 'yes') {
      return $('label[for="selector-yes"]').click()
    } else {
      return $('label[for="selector-no"]').click()
    }
  }
}

module.exports = new ChoosePaymentPage('/buy/choose-payment')