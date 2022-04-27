'use strict'

const { defineStep } = require('@cucumber/cucumber')
const addressEntry = require('../../pages/address-entry')

defineStep(/^I expect that I (can|cannot) see the following countries in the country dropdown$/, function (canSee, countriesTable) {
  const shouldExist = canSee === 'can'
  const rows = countriesTable.hashes()
  for (const row of rows) {
    addressEntry.checkCountryInDropDown(row.country, shouldExist)
  }
})
