'use strict'

const { defineStep } = require('cucumber')
const { core } = require('defra-wdio-core')
const GovPayConfirmPage = require('../../pages/gov-pay-confirm')

defineStep('I confirm payment details', function () {
  GovPayConfirmPage.checkAndClickConfirmation()
})
