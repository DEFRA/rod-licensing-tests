'use strict'

const Page = require('./page')
const { logger } = require('defra-logging-facade')

class FishTypePage extends Page {
  setFishType (fishType) {
    logger.info(`Licence Type selected as: ${fishType}`)
    switch (fishType) {
      case 'coarse':
        return $('#licence-type').click()
      case 'salmon':
        return $('#licence-type-2').click()
    }
  }
}
module.exports = new FishTypePage('/buy/licence-type')
