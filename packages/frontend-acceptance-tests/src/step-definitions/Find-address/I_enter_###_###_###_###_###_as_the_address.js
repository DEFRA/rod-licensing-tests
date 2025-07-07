'use strict'

import { defineStep } from '@cucumber/cucumber'
import addressEntry from '../../pages/address-entry'

defineStep(/^I enter "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" as the address$/, async (buildingNo, street, city, postcode, country) => {
  await addressEntry.checkUrl()
  await addressEntry.setAddressFields(buildingNo, street, city, postcode, country)
  await addressEntry.continue()
})
