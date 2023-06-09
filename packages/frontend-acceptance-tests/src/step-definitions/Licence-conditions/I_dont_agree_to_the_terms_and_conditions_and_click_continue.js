'use strict'

const { defineStep } = require('@cucumber/cucumber')
const termsCon = require('../../pages/licence-conditions')

defineStep('I dont agree to the terms and conditions and I click continue', async () => {
  await termsCon.checkUrl()
  await termsCon.continue()
})
