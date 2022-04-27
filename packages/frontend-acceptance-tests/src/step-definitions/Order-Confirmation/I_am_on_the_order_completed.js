'use strict'

const { defineStep } = require("@cucumber/cucumber")
const OrderConfirmPage = require('../../pages/order-complete')

defineStep('I am on the order confirmation page and exit the service', function () {
  OrderConfirmPage.continue()
})
