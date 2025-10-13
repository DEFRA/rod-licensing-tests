'use strict'

import { defineStep } from '@cucumber/cucumber'
import AddressResults from '../../pages/address-results.js'

defineStep(/^I select "(.*)" as an address$/, async uprn => {
  await AddressResults.checkUrl()
  await AddressResults.selectAddress(uprn)
  await AddressResults.continue()
})
