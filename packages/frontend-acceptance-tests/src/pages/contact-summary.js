'use strict'

const assert = require('assert')
const Page = require('./page')
const {logger} = require('defra-logging-facade')

  class ContactSummmaryPage extends Page {
    onSummaryPage () {
      $('#change-name').waitForDisplayed(1000)
      logger.info(`On the Summary Page`)
    }
    nameChange () {
      $('#change-name').waitForDisplayed(1000)
      $.click('#change-holder-name')
    }
    dobChange () {
      $('#change-birth-date').waitForDisplayed(1000)
      this.click('#change-birth-date')
    }
    emailChange () {
     $('#change-how-contacted').waitForDisplayed(1000)
     this.click('#change-holder-email')
    }
    addressChange () {
      $('#change-address').waitForDisplayed(1000)
      this.click('#change-holder-address')
    }
}
module.exports = new ContactSummmaryPage('/buy/contact-summary')
