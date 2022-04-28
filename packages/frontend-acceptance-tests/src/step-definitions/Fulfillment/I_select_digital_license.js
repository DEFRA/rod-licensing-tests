'use strict'

const { defineStep } = require('@cucumber/cucumber')
const Fulfilment = require('../../pages/fulfilment')

defineStep('I select digital license', function () {
  Fulfilment.checkUrl()
  Fulfilment.selectDigitalLicense()
  Fulfilment.continue()
})
