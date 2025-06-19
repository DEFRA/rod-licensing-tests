'use strict'

const { defineStep } = require('@cucumber/cucumber')
const ConcessionPage = require('../../pages/concession')

defineStep(/^I select "(.*)" as the concession$/, async (concession) => {
  await ConcessionPage.checkUrl()
  await ConcessionPage.setConcession(concession)
  await ConcessionPage.continue()
})
