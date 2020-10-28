'use strict'

const { defineStep } = require('cucumber')
const ConcessionPage = require('../../pages/concession')

defineStep(/^I enter "(.*)" as the bb concession and I enter "(.*)" as the concesssion id$/, function (concession, setBBNum) {
  ConcessionPage.checkUrl()
  ConcessionPage.setConcession(concession)
  ConcessionPage.setBBNumber(setBBNum)
  ConcessionPage.continue()
})
