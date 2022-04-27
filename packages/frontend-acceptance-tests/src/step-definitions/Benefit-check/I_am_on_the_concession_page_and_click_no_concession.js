'use strict'

const { defineStep } = require('@cucumber/cucumber')
const noBenefits = require('../../pages/concession')

defineStep(/^I enter "(.*)" concession$/, function (concession) {
  noBenefits.checkUrl()
  noBenefits.setConcession(concession)
  noBenefits.continue()
})
