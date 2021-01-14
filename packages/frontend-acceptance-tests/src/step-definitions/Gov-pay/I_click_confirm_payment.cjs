'use strict'

const { defineStep } = require('cucumber')
const GovPayConfirmPage = require('../../pages/gov-pay-confirm')

defineStep('I confirm payment details', function () {
  GovPayConfirmPage.continue()
})
