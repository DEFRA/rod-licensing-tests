'use strict'

const assert = require('assert')
const Page = require('./page')
const {logger} = require('defra-logging-facade')

  class SummmaryPage extends Page {
    onSummaryPage () {
      $('#change-holder-name').waitForDisplayed(1000)
      logger.info(`On the Summary Page`)
    }
    typeChange () {
      $('#change-licence-type').waitForDisplayed(1000)
      this.click('#change-licence-type')
    }
    lengthChange () {
      $('#change-licence-length').waitForDisplayed(1000)
      this.click('#change-licence-length')
    }
    concessionChange () {
      $('#change-disabled-concession').waitForDisplayed(1000)
      this.click('#change-disabled-concession')
    }
    startChange () {
      $('#change-start-date').waitForDisplayed(1000)
      this.click('#change-start-date')
    }
    rodsChange () {
      $('#change-number-of-rods').waitForDisplayed(1000)
      this.click('#change-number-of-rods')
    }
}
module.exports = new SummmaryPage('/buy/summary')
