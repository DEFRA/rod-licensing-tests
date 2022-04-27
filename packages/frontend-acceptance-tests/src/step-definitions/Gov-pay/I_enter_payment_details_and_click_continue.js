'use strict'

const { defineStep } = require('@cucumber/cucumber')
const GovPayPage = require('../../pages/gov-pay')
const moment = require('moment')

defineStep('I enter payment details', function () {
  const futureYear = moment()
    .add(1, 'Y')
    .format('YYYY')

  GovPayPage.setCardNumber('4444333322221111')
  GovPayPage.setCardExpiryMonth('01')
  GovPayPage.setCardExpiryYear(futureYear)
  GovPayPage.setCvc('555')
  GovPayPage.continue()
})
