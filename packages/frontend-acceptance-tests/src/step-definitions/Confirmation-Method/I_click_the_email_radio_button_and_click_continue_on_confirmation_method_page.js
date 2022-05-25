'use strict'

const { defineStep } = require('@cucumber/cucumber')
const ConfirmationMethod = require('../../pages/confirmation-method')

defineStep('I click email radio button and click continue on confirmation method page', async () => {
  await ConfirmationMethod.checkUrl()
  await ConfirmationMethod.selectConfirmationMethodEmail()
  await ConfirmationMethod.continue()
})
