'use strict'

const { defineStep } = require('cucumber')
const OrderConfirmPage = require('../../pages/order-complete')

defineStep('I am on the order confirmation page and exit the service', function () {
  OrderConfirmPage.checkUrl()
  OrderConfirmPage.continue()
})
