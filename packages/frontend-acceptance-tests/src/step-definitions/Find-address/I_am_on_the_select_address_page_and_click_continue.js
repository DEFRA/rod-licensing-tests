'use strict'

const { defineStep } = require('cucumber')
const selectAddress = require('../../pages/address-results')

defineStep('I am on the select address page and I click continue', function () {
  selectAddress.continue()
})
