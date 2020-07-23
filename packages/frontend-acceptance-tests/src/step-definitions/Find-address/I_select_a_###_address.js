'use strict'

const { defineStep } = require('cucumber')
const AddressResults = require('../../pages/address-results')

defineStep(/^I select "(.*)" as an address$/, function (uprn) {
  AddressResults.checkUrl()
  AddressResults.selectAddress(uprn)
  AddressResults.click('button', 'Continue', true)
})
