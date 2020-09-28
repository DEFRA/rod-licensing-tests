'use strict'

const { defineStep } = require('cucumber')
const termsCon = require('../../pages/terms-and-conditions')

defineStep('I dont agree to the terms and conditions and I click continue', function () {
  termsCon.checkUrl()
  termsCon.continue()
})
