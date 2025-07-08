'use strict'

import Page from './page.js'
import { logger } from 'defra-logging-facade'

class FishTypePage extends Page {
  async setFishType (fishType) {
    logger.info(`Licence Type selected as: ${fishType}`)
    switch (fishType) {
      case 'coarse2':
        return $('label[for="selector-trout-and-coarse-2-rod"]').click()
      case 'coarse3':
        return $('label[for="selector-trout-and-coarse-3-rod"]').click()
      case 'salmon':
        return $('label[for="selector-salmon-and-sea-trout"]').click()
    }
  }
}

export default new FishTypePage('/buy/licence-type')
