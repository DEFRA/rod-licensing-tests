'use strict'

import { defineStep } from '@cucumber/cucumber'
import selectAddress from '../../pages/address-results'

defineStep('I am on the select address page and I click continue', async () => {
  await selectAddress.continue()
})
