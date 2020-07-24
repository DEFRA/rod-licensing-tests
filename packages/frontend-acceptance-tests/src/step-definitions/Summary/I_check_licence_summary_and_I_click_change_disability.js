'use strict'

const { defineStep } = require('cucumber')
const SummaryPage = require('../../pages/licence-summary')

defineStep('I am on the licence summary page and I click the change disability support link', function () {
  SummaryPage.concessionChange()
})
