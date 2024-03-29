'use strict'

const { defineStep } = require('@cucumber/cucumber')
const startDate = require('../../pages/start-time')

defineStep('I am on the start time page and I click continue', async () => {
  await startDate.checkUrl()
  await startDate.continue()
})
