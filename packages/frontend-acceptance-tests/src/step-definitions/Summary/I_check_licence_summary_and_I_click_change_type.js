'use strict'

const { defineStep } = require('cucumber')
const SummaryPage = require('../../pages/licence-summary')

defineStep('I am on the licence summary page and I click the change type link', function () {
  SummaryPage.checkUrl()
  SummaryPage.typeChange()
})
