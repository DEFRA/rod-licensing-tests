'use strict'

const { defineStep } = require('@cucumber/cucumber')
const StartDatePage = require('../../pages/start-kind')

defineStep('I enter date two days from today and click continue', function () {
  StartDatePage.checkUrl()
  StartDatePage.twoDaysFromToday()
  StartDatePage.continue()
})
