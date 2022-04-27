'use strict'

const { defineStep } = require('@cucumber/cucumber')
const ConfirmationMethod = require('../../pages/confirmation-method')

defineStep('I click mobile radio button and click continue on confirmation method page', function () {
  ConfirmationMethod.checkUrl()
  ConfirmationMethod.selectConfirmationMethodMobile()
  ConfirmationMethod.continue()
})
