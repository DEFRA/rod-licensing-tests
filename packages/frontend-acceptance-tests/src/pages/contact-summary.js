'use strict'

const assert = require('assert')
const Page = require('./page')
const {logger} = require('defra-logging-facade')

  class SummmaryPage extends Page {
    onSummaryPage () {
      $('#change-holder-name').waitForDisplayed(1000)
      logger.info(`On the Summary Page`)
    }
    nameChange () {
      $('#change-holder-name').waitForDisplayed(1000)
      $.click('#change-holder-name')
    }
    dobChange () {
      $('#change-holder-dob').waitForDisplayed(1000)
      this.click('#change-holder-dob')
    }
    emailChange () {
     $('#change-holder-email').waitForDisplayed(1000)
     this.click('#change-holder-email')
    }
    mobileChange () {
      $('#change-holder-mobile').waitForDisplayed(1000)
      this.click('#change-holder-mobile')
    }
    addressChange () {
      $('#change-holder-address').waitForDisplayed(1000)
      this.click('#change-holder-address')
    }
}
module.exports = new SummmaryPage('/buy/summary')
