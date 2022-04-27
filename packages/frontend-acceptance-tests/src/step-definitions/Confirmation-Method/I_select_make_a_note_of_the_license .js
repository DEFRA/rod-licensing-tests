'use strict'

const { defineStep } = require("@cucumber/cucumber")
const ConfirmationMethod = require('../../pages/confirmation-method')

defineStep('I select make a note of the license', function () {
  ConfirmationMethod.checkUrl()
  ConfirmationMethod.selectConfirmationMethodMakeNote()
  ConfirmationMethod.continue()
})
