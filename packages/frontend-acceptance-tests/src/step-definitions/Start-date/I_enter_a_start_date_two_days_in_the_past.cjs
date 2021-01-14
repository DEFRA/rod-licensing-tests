'use strict'

const { defineStep } = require('cucumber')
const StartDatePage = require('../../pages/start-kind')

defineStep('I enter date two days in the past and click continue', function () {
  StartDatePage.checkUrl()
  StartDatePage.subtractTwoDaysFromToday()
  StartDatePage.continue()
})
