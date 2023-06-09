'use strict'
const { defineStep } = require('@cucumber/cucumber')
const LicenceConditionsPage = require('../../pages/licence-conditions')

defineStep('I agree to the licence conditions and click continue', async () => {
  await LicenceConditionsPage.checkUrl()
  await LicenceConditionsPage.setAgreeCheckbox()
  await LicenceConditionsPage.continue()
})
