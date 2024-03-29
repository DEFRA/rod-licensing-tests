'use strict'

const { defineStep } = require('@cucumber/cucumber')
const startKind = require('../../pages/start-kind')

defineStep('I am on the start kind page and I click continue', async () => {
  await startKind.checkUrl()
  await startKind.continue()
})
