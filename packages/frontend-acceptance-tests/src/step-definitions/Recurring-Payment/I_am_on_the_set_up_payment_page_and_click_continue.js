'use strict'

const { defineStep } = require('@cucumber/cucumber')
const SetUpRecurringPayment = require('../../pages/set-up-payment')

defineStep('I agree to the recurring card payment terms and conditions and click continue', async () => {
  await SetUpRecurringPayment.checkUrl()
  await SetUpRecurringPayment.setUpPaymentCheckbox()
  await SetUpRecurringPayment.continue()
})