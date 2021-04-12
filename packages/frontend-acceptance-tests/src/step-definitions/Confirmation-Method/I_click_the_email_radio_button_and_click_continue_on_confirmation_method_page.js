'use strict'

const { defineStep } = require('cucumber')
const ConfirmationMethod = require('../../pages/confirmation-method')

defineStep('I click email radio button and click continue on confirmation method page', function () {
  ConfirmationMethod.checkUrl()
  ConfirmationMethod.selectConfirmationMethodEmail()
  ConfirmationMethod.continue()
})
