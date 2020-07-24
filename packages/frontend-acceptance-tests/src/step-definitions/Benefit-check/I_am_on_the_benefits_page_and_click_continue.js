'use strict'

const { defineStep } = require('cucumber')
const benefits = require('../../pages/concession')

defineStep('I am on the benefits page and I click continue', function () {
  benefits.checkUrl()
  benefits.continue()
})
