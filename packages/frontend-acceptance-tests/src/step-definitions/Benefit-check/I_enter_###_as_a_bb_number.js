'use strict'

const { defineStep } = require('@cucumber/cucumber')
const ConcessionPage = require('../../pages/concession')

defineStep(/^I enter "(.*)" as the bb concession and I enter "(.*)" as the concesssion id$/, async (concession, setBBNum) => {
  await ConcessionPage.checkUrl()
  await ConcessionPage.setConcession(concession)
  await ConcessionPage.setBBNumber(setBBNum)
  await ConcessionPage.continue()
})
