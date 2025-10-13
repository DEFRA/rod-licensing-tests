'use strict'

import { defineStep } from '@cucumber/cucumber'
import AddressPage from '../../pages/address-lookup.js'

defineStep(/^I enter "(.*)" and "(.*)" as an invalid house number and postcode$/, async (setHouseNumber, setPostcode) => {
  await AddressPage.checkUrl()
  await AddressPage.setHouseNumberAndPostcode(setHouseNumber, setPostcode)
  await AddressPage.continue()
})
