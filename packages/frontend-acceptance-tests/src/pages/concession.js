'use strict'

const Page = require('./page')
const { logger } = require('defra-logging-facade')

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

  async setBBNumber (setBBNum) {
    await $('#blue-badge-number').setValue(setBBNum)
    logger.info(`Blue Badge holder: ${setBBNum}`)
  }

  async setNiNumber (setNiNum) {
    logger.info(`National Insurance number added: ${setNiNum}`)
    await $('#ni-number').setValue(setNiNum)
  }
}
module.exports = new ConcessionPage('/buy/disability-concession')
