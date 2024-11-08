'use strict'

const { defineStep } = require('@cucumber/cucumber')
const SetUpRecurringPayment = require('../../pages/set-up-payment')
const recurringPayments = process.env.SHOW_RECURRING_PAYMENTS === 'true'

defineStep('I agree to set up a recurring payment and click continue', async () => {
  if (recurringPayments) {
    await SetUpRecurringPayment.checkUrl()
    await SetUpRecurringPayment.setUpPaymentCheckbox()
    await SetUpRecurringPayment.continue()
  }
})