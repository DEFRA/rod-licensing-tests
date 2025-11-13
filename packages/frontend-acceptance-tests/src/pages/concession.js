'use strict'

import Page from './page.js'
const logger = require('../lib/logger-utils.js')

class ConcessionPage extends Page {
  async setConcession (concession) {
    switch (concession) {
      case 'Benefit':
        info(`Receiving Benefits: ${concession}`)
        return $('label[for="disability-concession"]').click()
      case 'BlueBadge':
        info(`Receiving Benefits: ${concession}`)
        return $('label[for="disability-concession-2"]').click()
      case 'No':
        info(`Receiving Benefits: ${concession}`)
        return $('label[for="disability-concession-3"]').click()
    }
  }

  async setNiNumber (setNiNum) {
    info(`National Insurance number added: ${setNiNum}`)
    await $('#ni-number').setValue(setNiNum)
  }
}

export default new ConcessionPage('/buy/disability-concession')
