'use strict'

import { defineStep } from '@cucumber/cucumber'
import OrderConfirmPage from '../../pages/order-complete.js'

defineStep('I am on the order confirmation page and exit the service', async () => {
  await OrderConfirmPage.continue()
})
