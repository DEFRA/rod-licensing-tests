'use strict'

import Page from './page.js'
import logger from '../utils/logger.js'

class TermsAndConditionsPage extends Page {
  async setAgreeCheckbox () {
    await $("label[for='agree']").waitForDisplayed(1000)
    await $("label[for='agree']").click()
    logger.info('Terms and Conditions checkbox selected')
  }
}

export default new TermsAndConditionsPage('/buy/conditions')
