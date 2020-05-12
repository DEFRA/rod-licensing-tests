'use strict'

const assert = require('assert')
const Page = require('./page')
const {logger} = require('defra-logging-facade')

class BlueBadgeProofPage extends Page {
  // Set the value in first name and surname fields
  setBBNumber (setBBNum) {
    $('#blue-badge-number').setValue(setBBNum)
    logger.info(`Blue Badge holder: ${setBBNum}`)
  }
}
module.exports = new BlueBadgeProofPage('/buy/blue-badge-number')
