'use strict'

const { defineStep } = require('cucumber')
const startDate = require('../../pages/start-date')

defineStep('I am on the start date page and I click continue', function () {
  startDate.checkUrl()
  startDate.continue()
})
