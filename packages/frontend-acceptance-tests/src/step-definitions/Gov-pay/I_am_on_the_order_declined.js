'use strict'

import { defineStep } from '@cucumber/cucumber'
import PaymentDeclinedPage from '../../pages/payment-declined'

defineStep('I am on the payment declined and exit the service', async () => {
  await PaymentDeclinedPage.exitService()
})
