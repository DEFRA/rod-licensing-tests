'use strict'

const Page = require('./page')
const { logger } = require('defra-logging-facade')

class LicenceConditionsPage extends Page {
  async setAgreeCheckbox () {
    await $('#agree').scrollIntoView()
    await $('#agree').click()
    logger.info('I agree to the licence conditions')
  }
}
module.exports = new LicenceConditionsPage('/buy/conditions')
