'use strict'

const { defineStep } = require('@cucumber/cucumber')
const addressLookup = require('../../pages/address-lookup')

defineStep('I am on the find address page and I click the manual address entry link', async () => {
  await addressLookup.manuallyInputAddressLink()
})
