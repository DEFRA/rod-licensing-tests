'use strict'

import Page from './page.js'
import logger from '../lib/logger-utils.js')

class TermsAndConditionsPage extends Page {
  async setAgreeCheckbox () {
    await $("label[for='agree']").waitForDisplayed(1000)
    await $("label[for='agree']").click()
    info('Terms and Conditions checkbox selected')
  }
}

export default new TermsAndConditionsPage('/buy/conditions')
