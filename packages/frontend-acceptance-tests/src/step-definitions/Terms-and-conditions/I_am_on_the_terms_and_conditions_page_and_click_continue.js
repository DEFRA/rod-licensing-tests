'use strict'

const { defineStep } = require('cucumber')
const termsCon = require('../../pages/terms-and-conditions')

defineStep('I am on the terms and conditions page and I click continue', function () {
  termsCon.checkUrl()
  termsCon.continue()
})
