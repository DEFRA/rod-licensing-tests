'use strict'
const { defineStep } = require('cucumber')
defineStep(/^I am at the start of the renewal journey$/, function () {
  browser.url('/buy/renew/identify')
})
