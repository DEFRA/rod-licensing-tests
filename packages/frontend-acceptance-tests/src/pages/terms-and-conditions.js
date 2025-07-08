'use strict'

import Page from './page'
import { logger } from 'defra-logging-facade'

class TermsAndConditionsPage extends Page {
  async setAgreeCheckbox () {
    await $("label[for='agree']").waitForDisplayed(1000)
    await $("label[for='agree']").click()
    logger.info('Terms and Conditions checkbox selected')
  }
}

export default new TermsAndConditionsPage('/buy/conditions')
