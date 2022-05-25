'use strict'

const { defineStep } = require('@cucumber/cucumber')
const Fulfilment = require('../../pages/fulfilment')

defineStep('I select paper license', async () => {
  await Fulfilment.checkUrl()
  await Fulfilment.selectPaperLicense()
  await Fulfilment.continue()
})
