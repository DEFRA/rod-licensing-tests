'use strict'

const { defineStep } = require('@cucumber/cucumber')
const GovPayPage = require('../../pages/gov-pay')
const moment = require('moment')

defineStep('I enter payment details', async () => {
  const futureYear = moment()
    .add(1, 'Y')
    .format('YYYY')

  await GovPayPage.setCardNumber('4444333322221111')
  await GovPayPage.setCardExpiryMonth('01')
  await GovPayPage.setCardExpiryYear(futureYear)
  await GovPayPage.setCvc('555')
  await GovPayPage.continue()
})
