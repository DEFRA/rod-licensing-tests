'use strict'
const assert = require('assert')
const Page = require('./page')
const {logger} = require('defra-logging-facade')

class FishTypePage extends Page {
  setFishType(fishType) {
    logger.info(`Licence Type selected as: ${fishType}`)
    switch (fishType) {
      case 'coarse':
        return $('licence-type').click()
        break
      case 'salmon':
        return $('licence-type-2').click()
        break
    }
  }
}
module.exports = new FishTypePage('/buy/licence-type')
