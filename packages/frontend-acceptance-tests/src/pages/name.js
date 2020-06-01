'use strict'

const assert = require('assert')
const Page = require('./page')
const { logger } = require('defra-logging-facade')

class NamePage extends Page {
  // Set the value in first name and surname fields
  setName (setFirstName, setSurName) {
    $('#first-name').setValue(setFirstName)
    $('#last-name').setValue(setSurName)
    logger.info(`Name entered as:  ${setFirstName} ${setSurName}`)
  }
}

module.exports = new NamePage('/buy/name')
