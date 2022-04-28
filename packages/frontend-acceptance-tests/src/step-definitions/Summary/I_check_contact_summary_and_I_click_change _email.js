'use strict'

const { defineStep } = require('@cucumber/cucumber')
const SummaryPage = require('../../pages/contact-summary')

defineStep('I am on the contact summary page and I click change email', function () {
  SummaryPage.emailChange()
})
