'use strict'

const { defineStep } = require('cucumber')
const { core } = require('defra-wdio-core')
const SummaryPage = require('../../pages/licence-summary')

defineStep('I am on the summary page and and I click continue', function () {
  SummaryPage.checkUrl()
  SummaryPage.continue()
})
