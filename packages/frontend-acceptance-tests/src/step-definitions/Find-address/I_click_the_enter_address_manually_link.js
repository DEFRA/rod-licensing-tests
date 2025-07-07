'use strict'

import { defineStep } from '@cucumber/cucumber'
const addressLookup from '../../pages/address-lookup')

defineStep('I am on the find address page and I click the manual address entry link', async () => {
  await addressLookup.manuallyInputAddressLink()
})
