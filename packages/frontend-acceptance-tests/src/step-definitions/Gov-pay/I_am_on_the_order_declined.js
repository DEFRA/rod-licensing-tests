'use strict'

const { defineStep } = require('@cucumber/cucumber')
const PaymentDeclinedPage = require('../../pages/payment-declined')

defineStep('I am on the payment declined and exit the service', function () {
  PaymentDeclinedPage.exitService()
})
