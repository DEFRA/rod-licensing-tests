'use strict'

const Page = require('./page')
const { logger } = require('defra-logging-facade')

class NumberOfRodsPage extends Page {
  async setNumberOfRods (numberOfRods) {
    switch (numberOfRods) {
      case 2:
        logger.info(`Number of rods selected: ${numberOfRods}`)
        return $('#number-of-rods').click()
      case 3:
        logger.info(`Number of rods selected: ${numberOfRods}`)
        return $('#number-of-rods-2').click()
      default:
        logger.info(`Number of rods selected: ${numberOfRods}`)
        return $('#number-of-rods').click()
    }
  }
}
module.exports = new NumberOfRodsPage('/buy/number-of-rods')
