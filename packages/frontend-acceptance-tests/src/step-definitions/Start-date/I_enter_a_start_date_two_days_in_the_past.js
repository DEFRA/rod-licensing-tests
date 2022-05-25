'use strict'

const { defineStep } = require('@cucumber/cucumber')
const StartDatePage = require('../../pages/start-kind')

defineStep('I enter date two days in the past and click continue', async () => {
  await StartDatePage.checkUrl()
  await StartDatePage.subtractTwoDaysFromToday()
  await StartDatePage.continue()
})
