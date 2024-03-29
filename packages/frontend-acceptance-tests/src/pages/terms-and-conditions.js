'use strict'

const Page = require('./page')
const { logger } = require('defra-logging-facade')

class TermsAndConditionsPage extends Page {
  async setAgreeCheckbox () {
    await $("label[for='agree']").waitForDisplayed(1000)
    await $("label[for='agree']").click()
    logger.info('Terms and Conditions checkbox selected')
  }
}
module.exports = new TermsAndConditionsPage('/buy/conditions')
