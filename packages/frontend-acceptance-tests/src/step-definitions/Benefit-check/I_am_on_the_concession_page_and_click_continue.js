'use strict'

const { defineStep } = require('cucumber')
const nothingSelected = require('../../pages/concession')

defineStep('I am on the concession page and I click continue', function ()  {
  nothingSelected.checkUrl()
  nothingSelected.continue()
})
