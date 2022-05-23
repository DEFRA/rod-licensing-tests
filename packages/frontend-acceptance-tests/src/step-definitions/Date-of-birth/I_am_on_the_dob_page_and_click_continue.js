'use strict'

const { defineStep } = require('@cucumber/cucumber')
const DOB = require('../../pages/set-dob')

defineStep('I am on the dob page and I click continue', async () => {
  await DOB.continue()
})
