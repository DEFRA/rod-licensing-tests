'use strict'

const { defineStep } = require('cucumber')
const addressEntry = require('../../pages/address-entry')

defineStep('I am on the address entry page and I click continue', function () {
  addressEntry.continue()
})
