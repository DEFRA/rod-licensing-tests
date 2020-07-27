'use strict'

const { defineStep } = require('cucumber')
const contactDetails = require('../../pages/contact')

defineStep('I am on the contact details page and I click continue', function () {
  contactDetails.continue()
})
