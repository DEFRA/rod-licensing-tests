'use strict'

const { defineStep } = require('@cucumber/cucumber')
const StartTimePage = require('../../pages/start-time')

defineStep(/^I enter a start time of "(.*)"$/, async time => {
  await StartTimePage.checkUrl()
  await StartTimePage.startTimePicker(time)
  await StartTimePage.continue()
})
