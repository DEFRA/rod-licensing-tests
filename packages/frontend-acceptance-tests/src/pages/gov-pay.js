'use strict'

import Page from './page.js'
const logger = require('../lib/logger-utils.js')

class GovPayPage extends Page {
  async setCardHolderName (setCardHolderName) {
    await $('#cardholder-name').waitForDisplayed(1000)
    await $('#cardholder-name').setValue(setCardHolderName)
    info(`Set cardholders name as: ${setCardHolderName}`)
  }

  async setCardExpiryMonth (setExpiryMonth) {
    await $('#expiry-month').waitForDisplayed(1000)
    await $('#expiry-month').setValue(setExpiryMonth)
    info(`Set expiry date as: ${setExpiryMonth}`)
  }

  async setCardExpiryYear (year) {
    await $('#expiry-year').waitForDisplayed(1000)
    await $('#expiry-year').setValue(year)
    info(`Set expiry year as: ${year}`)
  }

  async setCardNumber (setCardNumber) {
    await $('#card-no').waitForDisplayed(1000)
    await $('#card-no').setValue(setCardNumber)
    info(`Set card number as: ${setCardNumber}`)
  }

  async setCvc (setCvc) {
    await $('#cvc').waitForDisplayed(1000)
    await $('#cvc').setValue(setCvc)
    info(`Set cvc as: ${setCvc}`)
  }

  async setAddressLine1 (setAddressLine1) {
    await $('#address-line-1').waitForDisplayed(1000)
    await $('#address-line-1').setValue(setAddressLine1)
    info(`Set Address Line 1 as: ${setAddressLine1}`)
  }

  async setAddressCity (setAddressCity) {
    await $('#address-city').waitForDisplayed(1000)
    await $('#address-city').setValue(setAddressCity)
    info(`Set Address City as: ${setAddressCity}`)
  }

  async setAddressPostcode (setAddressPostcode) {
    await $('#address-postcode').waitForDisplayed(1000)
    await $('#address-postcode').setValue(setAddressPostcode)
    info(`Set Address Postcode as: ${setAddressPostcode}`)
  }

  async setEmail (setEmail) {
    await $('#email').waitForDisplayed(1000)
    await $('#email').setValue(setEmail)
    info(`Set Email as: ${setEmail}`)
  }

  async continue () {
    await $('#submit-card-details').click()
  }
}

export default new GovPayPage()
