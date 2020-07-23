'use strict'

const { defineStep } = require('cucumber')
const GovPayPage = require('../../pages/gov-pay')
const moment = require('moment')

defineStep(/^I enter payment details as "(.*)"$/, function (cardNo) {
  const futureYear = moment()
    .add(1, 'Y')
    .format('YYYY')

  GovPayPage.setCardNumber(cardNo)
  GovPayPage.setCardExpiryMonth('01')
  GovPayPage.setCardExpiryYear(futureYear)
  GovPayPage.setCvc('555')
  GovPayPage.click('button', 'Continue', true)
})
