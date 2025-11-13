'use strict'

import Page from './page.js'
const logger = require('../lib/logger-utils.js')

class GovPayConfirmPage extends Page {
  async continue () {
    await $('#confirm').waitForDisplayed(1000)
    await $('#confirm').click()
    info(`On the Payment Confirmation page - Confirm clicked.......`)
  }
}

export default new GovPayConfirmPage()
