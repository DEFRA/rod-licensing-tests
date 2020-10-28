'use strict'

const { defineStep } = require('cucumber')
const startDate = require('../../pages/start-time')

defineStep('I am on the start time page and I click continue', function () {
  startDate.checkUrl()
  startDate.continue()
})
