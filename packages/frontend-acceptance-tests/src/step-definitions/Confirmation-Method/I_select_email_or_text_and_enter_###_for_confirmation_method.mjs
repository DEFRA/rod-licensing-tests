'use strict'

import { defineStep } from '@cucumber/cucumber'
import ConfirmationMethod from '../../pages/confirmation-method.js'

defineStep(/^I enter email as "(.*)" and number as "(.*)" for confirmation method$/, async (setEmailAddress, setMobileNumber) => {
  await ConfirmationMethod.checkUrl()
  await ConfirmationMethod.setConfirmationMethod(setEmailAddress, setMobileNumber)
  await ConfirmationMethod.continue()
})
