'use strict'

const { logger } = require('defra-logging-facade')
const Page = require('./page')

class FulfilmentPage extends Page {
  async selectDigitalLicense () {
    await $('label[for="licence-option"]').click()
    logger.info(`Digital license selected, no value added`)
  }

  async selectPaperLicense () {
    await $('label[for="licence-option-2"]').click()
    logger.info(`Paper license selected, no value added`)
  }
}
module.exports = new FulfilmentPage('/buy/fulfilment')
