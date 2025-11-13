'use strict'

import Page from './page.js'
import logger from '../lib/logger-utils.js'

class GovPayPage extends Page {
  async setCardHolderName (setCardHolderName) {
    await $('#cardholder-name').waitForDisplayed(1000)
    await $('#cardholder-name').setValue(setCardHolderName)
    logger.info(`Set cardholders name as: ${setCardHolderName}`)
  }

  async setCardExpiryMonth (setExpiryMonth) {
    await $('#expiry-month').waitForDisplayed(1000)
    await $('#expiry-month').setValue(setExpiryMonth)
    logger.info(`Set expiry date as: ${setExpiryMonth}`)
  }

  async setCardExpiryYear (year) {
    await $('#expiry-year').waitForDisplayed(1000)
    await $('#expiry-year').setValue(year)
    logger.info(`Set expiry year as: ${year}`)
  }

  async setCardNumber (setCardNumber) {
    await $('#card-no').waitForDisplayed(1000)
    await $('#card-no').setValue(setCardNumber)
    logger.info(`Set card number as: ${setCardNumber}`)
  }

  async setCvc (setCvc) {
    await $('#cvc').waitForDisplayed(1000)
    await $('#cvc').setValue(setCvc)
    logger.info(`Set cvc as: ${setCvc}`)
  }

  async setAddressLine1 (setAddressLine1) {
    await $('#address-line-1').waitForDisplayed(1000)
    await $('#address-line-1').setValue(setAddressLine1)
    logger.info(`Set Address Line 1 as: ${setAddressLine1}`)
  }

  async setAddressCity (setAddressCity) {
    await $('#address-city').waitForDisplayed(1000)
    await $('#address-city').setValue(setAddressCity)
    logger.info(`Set Address City as: ${setAddressCity}`)
  }

  async setAddressPostcode (setAddressPostcode) {
    await $('#address-postcode').waitForDisplayed(1000)
    await $('#address-postcode').setValue(setAddressPostcode)
    logger.info(`Set Address Postcode as: ${setAddressPostcode}`)
  }

  async setEmail (setEmail) {
    await $('#email').waitForDisplayed(1000)
    await $('#email').setValue(setEmail)
    logger.info(`Set Email as: ${setEmail}`)
  }

  async continue () {
    await $('#submit-card-details').click()
  }
}

export default new GovPayPage()
