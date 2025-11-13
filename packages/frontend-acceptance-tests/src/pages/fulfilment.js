'use strict'

import Page from './page.js'
const logger = require('../lib/logger-utils.js')

class FulfilmentPage extends Page {
  async selectDigitalLicense () {
    await $('label[for="licence-option"]').click()
    info(`Digital license selected, no value added`)
  }

  async selectPaperLicense () {
    await $('label[for="licence-option-2"]').click()
    info(`Paper license selected, no value added`)
  }
}

export default new FulfilmentPage('/buy/fulfilment')
