'use strict'

const { defineStep } = require('cucumber')
const addressLookup = require('../../pages/address-lookup')

defineStep('I am on the find address page and I click the manual address entry link', function () {
  addressLookup.manuallyInputAddressLink()
})
