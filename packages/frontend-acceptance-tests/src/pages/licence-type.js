'use strict'

const Page = require('./page')
const { logger } = require('defra-logging-facade')

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
module.exports = new FishTypePage('/buy/licence-type')
