'use strict'

const { defineStep } = require('@cucumber/cucumber')
const contactDetails = require('../../pages/contact')

defineStep('I am on the contact details page and I click continue', async () => {
  await contactDetails.continue()
})
