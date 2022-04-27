'use strict'
const { defineStep } = require("@cucumber/cucumber")
const TermsAndConditionsPage = require('../../pages/terms-and-conditions')

defineStep('I agree to the terms and conditions and click continue', function () {
  TermsAndConditionsPage.checkUrl()
  TermsAndConditionsPage.setAgreeCheckbox()
  TermsAndConditionsPage.continue()
})
