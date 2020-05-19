'use strict'

const assert = require('assert')
const Page = require('./page')
const {logger} = require('defra-logging-facade')

  class SummmaryPage extends Page {
    typeChange () {
      $('#change-licence-type').waitForDisplayed(1000)
      this.click('#change-licence-type')
    }
    lengthChange () {
      $('#change-licence-length').waitForDisplayed(1000)
      this.click('#change-licence-length')
    }
    concessionChange () {
      $('#change-benefit-').waitForDisplayed(1000)
      this.click('#change-disabled-concession')
    }
    concessionChange () {
      $('#add-benefit-check').waitForDisplayed(1000)
      this.click('#add-benefit-check')
    }
    startChange () {
      $('#change-to-start').waitForDisplayed(1000)
      this.click('#change-start-date')
    }
    rodsChange () {
      $('#change-number-of-rods').waitForDisplayed(1000)
      this.click('#change-number-of-rods')
    }
}
module.exports = new SummmaryPage('/buy/licence-summary')
