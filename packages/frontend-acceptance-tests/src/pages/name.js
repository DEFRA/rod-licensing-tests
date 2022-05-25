'use strict'

const Page = require('./page')
const { logger } = require('defra-logging-facade')

class NamePage extends Page {
  // Set the value in first name and surname fields
  async setName (setFirstName, setSurName) {
    await $('#first-name').setValue(setFirstName)
    await $('#last-name').setValue(setSurName)
    logger.info(`Name entered as:  ${setFirstName} ${setSurName}`)
  }
}

module.exports = new NamePage('/buy/name')
