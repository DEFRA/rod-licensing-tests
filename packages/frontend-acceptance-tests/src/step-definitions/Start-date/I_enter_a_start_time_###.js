'use strict'

const { defineStep } = require("@cucumber/cucumber")
const StartTimePage = require('../../pages/start-time')

defineStep(/^I enter a start time of "(.*)"$/, function (time) {
  StartTimePage.checkUrl()
  StartTimePage.startTimePicker(time)
  StartTimePage.continue()
})
