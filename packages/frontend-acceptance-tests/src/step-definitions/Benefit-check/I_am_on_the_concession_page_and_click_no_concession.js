'use strict'

const { defineStep } = require('@cucumber/cucumber')
const noBenefits = require('../../pages/concession')

defineStep(/^I enter "(.*)" concession$/, async (concession) =>{
  await noBenefits.checkUrl()
  await noBenefits.setConcession(concession)
  await noBenefits.continue()
})
