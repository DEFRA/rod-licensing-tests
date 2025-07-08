'use strict'

import { logger } from 'defra-logging-facade.js'
import Page from './page.js'

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

export default new FulfilmentPage('/buy/fulfilment')
