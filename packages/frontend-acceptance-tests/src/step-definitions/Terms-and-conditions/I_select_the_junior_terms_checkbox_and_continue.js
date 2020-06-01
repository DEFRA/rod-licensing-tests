'use strict'

const { defineStep } = require('cucumber')
const { core } = require('defra-wdio-core')
const TermAndConPage = require('../../pages/terms-and-conditions')

defineStep('I select I agree the junior licence and and I click continue', function () {
  TermAndConPage.checkUrl()
  TermAndConPage.setAgreeCheckbox()
  TermAndConPage.click('button', 'Get my licence', true)
})
