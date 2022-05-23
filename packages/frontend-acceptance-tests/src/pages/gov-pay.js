'use strict'

const { logger } = require('defra-logging-facade')
const Page = require('./page')

class GovPayPage extends Page {
  async setCardHolderName(setCardHolderName) {
    await $('#cardholder-name').waitForDisplayed(1000)
    await $('#cardholder-name').setValue(setCardHolderName)
    logger.info(`Set cardholders name as: ${setCardHolderName}`)
  }

  async setCardExpiryMonth(setExpiryMonth) {
    await $('#expiry-month').waitForDisplayed(1000)
    await $('#expiry-month').setValue(setExpiryMonth)
    logger.info(`Set expiry date as: ${setExpiryMonth}`)
  }

  async setCardExpiryYear(year) {
    await $('#expiry-year').waitForDisplayed(1000)
    await $('#expiry-year').setValue(year)
    logger.info(`Set expiry year as: ${year}`)
  }

  async setCardNumber(setCardNumber) {
    await $('#card-no').waitForDisplayed(1000)
    await $('#card-no').setValue(setCardNumber)
    logger.info(`Set card number as: ${setCardNumber}`)
  }

  async setCvc(setCvc) {
    await $('#cvc').waitForDisplayed(1000)
    await $('#cvc').setValue(setCvc)
    logger.info(`Set cvc as: ${setCvc}`)
  }

  async continue() {
    await $('#submit-card-details').click()
  }
}
module.exports = new GovPayPage()
