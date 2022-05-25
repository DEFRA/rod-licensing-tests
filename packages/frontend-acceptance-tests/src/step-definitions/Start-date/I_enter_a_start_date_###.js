'use strict'

const { defineStep } = require('@cucumber/cucumber')
const StartDatePage = require('../../pages/start-kind')

defineStep('I enter date two days from today and click continue', async () => {
  await StartDatePage.checkUrl()
  await StartDatePage.twoDaysFromToday()
  await StartDatePage.continue()
})
