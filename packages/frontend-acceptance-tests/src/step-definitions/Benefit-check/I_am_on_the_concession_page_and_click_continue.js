'use strict'

const { defineStep } = require('@cucumber/cucumber')
const nothingSelected = require('../../pages/concession')

defineStep('I am on the concession page and I click continue', async () => {
  await nothingSelected.checkUrl()
  await nothingSelected.continue()
})
