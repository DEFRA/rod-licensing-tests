'use strict'

const { defineStep } = require("@cucumber/cucumber")
const findAddress = require('../../pages/address-lookup')

defineStep('I am on the find address page and I click continue', function () {
  findAddress.continue()
})
