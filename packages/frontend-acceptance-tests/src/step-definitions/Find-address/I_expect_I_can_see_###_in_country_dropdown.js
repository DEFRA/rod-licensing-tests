'use strict'

const { defineStep } = require('cucumber')
const addressEntry = require('../../pages/address-entry')

defineStep(/^I expect that I can see "(.*)" in the country dropdown$/, function (country) {
  addressEntry.checkCountryInDropDown(country)
})