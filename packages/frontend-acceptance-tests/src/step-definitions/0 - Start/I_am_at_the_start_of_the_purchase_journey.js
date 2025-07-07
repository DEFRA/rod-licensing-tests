'use strict'

import { defineStep } from '@cucumber/cucumber'

defineStep(/^I am at the start of the purchase journey$/, async () => {
  await browser.url('/buy/new')
})
