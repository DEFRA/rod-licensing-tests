'use strict'
const { defineStep } = require('cucumber')
defineStep(/^I am at the start of the purchase journey$/, function () {
  browser.url('/buy/new')
})
