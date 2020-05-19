'use strict'

const { defineStep } = require('cucumber')
const { core } = require('defra-wdio-core')
const SummaryPage = require('../../pages/contact-summary')

defineStep('I am on the contact summary page and and I click continue', function (){
  SummaryPage.checkUrl()
  SummaryPage.clickLinkByText('Continue')
})
