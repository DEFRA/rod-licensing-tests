'use strict'

import { defineStep } from '@cucumber/cucumber'
import SetUpRecurringPayment from '../../pages/set-up-payment'

const recurringPayments = process.env.SHOW_RECURRING_PAYMENTS === 'true'

defineStep('I agree to set up a recurring payment and click continue', async () => {
  if (recurringPayments) {
    await SetUpRecurringPayment.checkUrl()
    await SetUpRecurringPayment.setUpPaymentCheckbox()
    await SetUpRecurringPayment.continue()
  }
})