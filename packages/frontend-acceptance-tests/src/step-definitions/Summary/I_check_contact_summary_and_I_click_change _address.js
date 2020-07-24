'use strict'

const { defineStep } = require('cucumber')
const SummaryPage = require('../../pages/contact-summary')

defineStep('I am on the contact summary page and I click change address', function () {
  SummaryPage.addressChange()
})
