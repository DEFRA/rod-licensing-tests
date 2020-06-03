'use strict'

const { defineStep } = require('cucumber')
const { core } = require('defra-wdio-core')
const SummaryPage = require('../../pages/licence-summary')

defineStep('I am on the licence summary page and I click continue', function () {
  SummaryPage.checkUrl()
  SummaryPage.continue()
})
