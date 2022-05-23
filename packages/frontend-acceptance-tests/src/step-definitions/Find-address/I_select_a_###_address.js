'use strict'

const { defineStep } = require('@cucumber/cucumber')
const AddressResults = require('../../pages/address-results')

defineStep(/^I select "(.*)" as an address$/, async (uprn) => {
  await AddressResults.checkUrl()
  await AddressResults.selectAddress(uprn)
  await AddressResults.continue()
})
