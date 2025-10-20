'use strict'

import { defineStep } from '@cucumber/cucumber'
import addressEntry from '../../pages/address-entry.js'

defineStep(/^I expect that I can see "(.*)" in the country dropdown$/, async country => {
  await addressEntry.checkCountryInDropDown(country)
})
