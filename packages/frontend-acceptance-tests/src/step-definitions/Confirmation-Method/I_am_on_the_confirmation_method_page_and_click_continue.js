'use strict'

const { defineStep } = require('@cucumber/cucumber')
const ConfirmationMethod = require('../../pages/confirmation-method')

defineStep('I am on the confirmation method page and I click continue', function () {
  ConfirmationMethod.continue()
})
