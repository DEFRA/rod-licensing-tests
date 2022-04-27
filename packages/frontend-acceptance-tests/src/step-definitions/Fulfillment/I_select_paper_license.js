'use strict'

const { defineStep } = require('@cucumber/cucumber')
const Fulfilment = require('../../pages/fulfilment')

defineStep('I select paper license', function () {
  Fulfilment.checkUrl()
  Fulfilment.selectPaperLicense()
  Fulfilment.continue()
})
