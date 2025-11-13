'use strict'

import Page from './page.js'
import logger from'../lib/logger-utils.js'

class ConcessionPage extends Page {
  async setConcession (concession) {
    switch (concession) {
      case 'Benefit':
        logger.info(`Receiving Benefits: ${concession}`)
        return $('label[for="disability-concession"]').click()
      case 'BlueBadge':
        logger.info(`Receiving Benefits: ${concession}`)
        return $('label[for="disability-concession-2"]').click()
      case 'No':
        logger.info(`Receiving Benefits: ${concession}`)
        return $('label[for="disability-concession-3"]').click()
    }
  }

  async setNiNumber (setNiNum) {
    logger.info(`National Insurance number added: ${setNiNum}`)
    await $('#ni-number').setValue(setNiNum)
  }
}

export default new ConcessionPage('/buy/disability-concession')
