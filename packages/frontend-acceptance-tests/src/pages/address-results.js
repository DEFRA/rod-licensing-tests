'use strict'
const assert = require('assert')
const Page = require('./page')
const { logger } = require('defra-logging-facade')

class AddressResults extends Page {
  // Set the radio button depending on data file value, and click continue
  selectAddress (uprn) {
    const toClick = "label[for='" + uprn + "']"
    this.click(toClick)
    logger.info(`Address selected successfully`)
  }
}

module.exports = new AddressResults('/buy/select-address')
