'use strict'

const { defineStep } = require('cucumber')
const TermAndConPage = require('../../pages/terms-and-conditions')

defineStep('I select I agree the junior licence and and I click continue', function () {
  TermAndConPage.checkUrl()
  TermAndConPage.setAgreeCheckbox()
  TermAndConPage.continue()
})
