'use strict'

const { defineStep } = require('@cucumber/cucumber')
const SetUpRecurringPayment = require('../../pages/set-up-payment')

defineStep('I agree to set up a recurring payment and click continue', async () => {
  await SetUpRecurringPayment.checkUrl()
  await SetUpRecurringPayment.setUpPaymentCheckbox()
  await SetUpRecurringPayment.continue()
})