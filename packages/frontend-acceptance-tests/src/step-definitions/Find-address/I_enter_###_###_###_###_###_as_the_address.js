'use strict'

const { defineStep } = require('cucumber')
const addressEntry = require('../../pages/address-entry')

defineStep(/^I enter "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" as the address$/, function (buildingNo, street, city, postcode, country) {
  addressEntry.checkUrl()
  addressEntry.setAddressFields(buildingNo, street, city, postcode, country)
  addressEntry.continue()
})
