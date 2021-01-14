import { defineStep } from 'cucumber'

defineStep(/^I am at the start of the purchase journey$/, function () {
  browser.url('/buy/new')
})
