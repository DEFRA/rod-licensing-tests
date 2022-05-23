'use strict'

const { defineStep } = require('@cucumber/cucumber')
const Fulfilment = require('../../pages/fulfilment')

defineStep('I select digital license', async () => {
  await Fulfilment.checkUrl()
  await Fulfilment.selectDigitalLicense()
  await Fulfilment.continue()
})
