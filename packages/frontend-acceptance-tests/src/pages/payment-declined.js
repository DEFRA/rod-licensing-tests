'use strict'

const assert = require('assert')
const {logger} = require('defra-logging-facade')
const Page = require('./page')

class paymentCancelled extends Page {
  exitService(){
    $('//*[@class=\'grey-button govuk-button-adjacent\']').click()
  }

  retryPayment() {
    $('.button').click()
  }

}

module.exports = new paymentCancelled('/govpay/failure')
