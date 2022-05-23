'use strict'

const { defineStep } = require('@cucumber/cucumber')
const addressEntry = require('../../pages/address-entry')

defineStep(/^I enter "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" as the address$/, async (buildingNo, street, city, postcode, country) => {
  await addressEntry.checkUrl()
  await addressEntry.setAddressFields(buildingNo, street, city, postcode, country)
  await addressEntry.continue()
})
