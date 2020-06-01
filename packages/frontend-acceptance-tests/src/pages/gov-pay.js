'use strict'

const assert = require('assert')
const { logger } = require('defra-logging-facade')
const Page = require('./page')

class GovPayPage extends Page {
  setCardHolderName (setCardHolderName) {
    $('#cardholder-name').waitForDisplayed(1000)
    $('#cardholder-name').setValue(setCardHolderName)
    logger.info(`Set cardholders name as: ${setCardHolderName}`)
  }
  setCardExpiryMonth (setExpiryMonth) {
    $('#expiry-month').waitForDisplayed(1000)
    $('#expiry-month').setValue(setExpiryMonth)
    logger.info(`Set expiry date as: ${setExpiryMonth}`)
  }
  setCardExpiryYear (year) {
    $('#expiry-year').waitForDisplayed(1000)
    $('#expiry-year').setValue(year)
    logger.info(`Set expiry year as: ${year}`)
  }
  setCardNumber (setCardNumber) {
    $('#card-no').waitForDisplayed(1000)
    $('#card-no').setValue(setCardNumber)
    logger.info(`Set card number as: ${setCardNumber}`)
  }
  setCvc (setCvc) {
    $('#cvc').waitForDisplayed(1000)
    $('#cvc').setValue(setCvc)
    logger.info(`Set cvc as: ${setCvc}`)
  }
}
module.exports = new GovPayPage()
