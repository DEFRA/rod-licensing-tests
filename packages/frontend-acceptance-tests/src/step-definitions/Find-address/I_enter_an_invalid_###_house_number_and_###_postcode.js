'use strict'

const { defineStep } = require('@cucumber/cucumber')
const AddressPage = require('../../pages/address-lookup')

defineStep(/^I enter "(.*)" and "(.*)" as an invalid house number and postcode$/, async (setHouseNumber, setPostcode) => {
  await AddressPage.checkUrl()
  await AddressPage.setHouseNumberAndPostcode(setHouseNumber, setPostcode)
  await AddressPage.continue()
})
