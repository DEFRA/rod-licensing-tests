'use strict'

const { defineStep } = require('cucumber')
const TermAdnConPage = require('../../pages/terms-and-conditions')

defineStep('I select I agree and I click continue', function () {
  TermAdnConPage.checkUrl()
  TermAdnConPage.setAgreeCheckbox()
  TermAdnConPage.continue()
})
