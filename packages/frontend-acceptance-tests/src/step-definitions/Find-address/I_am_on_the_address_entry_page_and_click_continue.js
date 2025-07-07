'use strict'

import { defineStep } from '@cucumber/cucumber'
import addressEntry from '../../pages/address-entry'

defineStep('I am on the address entry page and I click continue', async () => {
  await addressEntry.continue()
})
