'use strict'

const { defineStep } = require('cucumber')
const { core } = require('defra-wdio-core')
const TermAdnConPage = require('../../pages/terms-and-conditions')

defineStep('I select I agree and and I click continue', function () {
  TermAdnConPage.checkUrl()
  TermAdnConPage.setAgreeCheckbox()
  TermAdnConPage.click('button', 'Pay for the licence', true)
})
