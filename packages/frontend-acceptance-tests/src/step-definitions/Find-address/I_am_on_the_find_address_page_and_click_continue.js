'use strict'

import { defineStep } from '@cucumber/cucumber'
import findAddress from '../../pages/address-lookup.js'

defineStep('I am on the find address page and I click continue', async () => {
  await findAddress.continue()
})
