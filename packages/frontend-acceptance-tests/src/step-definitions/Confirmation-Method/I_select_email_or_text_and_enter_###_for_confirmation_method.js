'use strict'

const { defineStep } = require('@cucumber/cucumber')
const ConfirmationMethod = require('../../pages/confirmation-method')

defineStep(/^I enter email as "(.*)" and number as "(.*)" for confirmation method$/, async (setEmailAddress, setMobileNumber) => {
  await ConfirmationMethod.checkUrl()
  await ConfirmationMethod.setConfirmationMethod(setEmailAddress, setMobileNumber)
  await ConfirmationMethod.continue()
})
