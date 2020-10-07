'use strict'

const { defineStep } = require('cucumber')
const ConcessionPage = require('../../pages/concession')

defineStep(/^I enter "(.*)" as the ni concession and I enter "(.*)" as the concesssion id$/, function (concession, setNiNum) {
  ConcessionPage.checkUrl()
  ConcessionPage.setConcession(concession)
  ConcessionPage.setNiNumber(setNiNum)
  ConcessionPage.continue()
})
