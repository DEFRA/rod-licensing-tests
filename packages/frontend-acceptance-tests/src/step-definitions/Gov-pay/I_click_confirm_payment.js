'use strict'

const { defineStep } = require('@cucumber/cucumber')
const GovPayConfirmPage = require('../../pages/gov-pay-confirm')

defineStep('I confirm payment details', async () => {
  await GovPayConfirmPage.continue()
})
