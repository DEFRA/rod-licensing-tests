'use strict'

const { defineStep } = require('@cucumber/cucumber')
const SummaryPage = require('../../pages/licence-summary')

defineStep('I am on the licence summary page and I click continue', async () => {
  await SummaryPage.continue()
})
