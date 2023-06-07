'use strict'

const { logger } = require('defra-logging-facade')
const Page = require('./page')

class AddLicence extends Page {
  async setDoNotAddLicence () {
    await $('#selector-no').click()
    logger.info(`No, lets finish selected`)
    }
}

module.exports = new AddLicence('/buy/add-licence')