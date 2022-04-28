'use strict'

const { defineStep } = require('@cucumber/cucumber')
const ConfirmationMethod = require('../../pages/confirmation-method')

defineStep(/^I enter email as "(.*)" and number as "(.*)" for confirmation method$/, function (setEmailAddress, setMobileNumber) {
  ConfirmationMethod.checkUrl()
  ConfirmationMethod.setConfirmationMethod(setEmailAddress, setMobileNumber)
  ConfirmationMethod.continue()
})
