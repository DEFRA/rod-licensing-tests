'use strict'

const { defineStep } = require('cucumber')
const { core } = require('defra-wdio-core')
const StartTimePage = require('../../pages/start-time')

defineStep(/^I enter a start time of "(.*)"$/, function (time) {
  StartTimePage.checkUrl()
  StartTimePage.startTimePicker(time)
  StartTimePage.click('button', 'Continue', true)
})
