'use strict'

const assert = require('assert')
const Page = require('./page')
const { logger } = require('defra-logging-facade')

class NumberOfRodsPage extends Page {
  setNumberOfRods (numberOfRods) {
    switch (numberOfRods) {
      case 2:
        return $('#number-of-rods').click()
        logger.info(`Number of rods selected: ${numberOfRods}`)
      case 3:
        return $('#number-of-rods-2').click()
        logger.info(`Number of rods selected: ${numberOfRods}`)
      default:
        return $('#number-of-rods').click()
        logger.info(`Number of rods selected: ${numberOfRods}`)
    }
  }
}
module.exports = new NumberOfRodsPage('/buy/number-of-rods')
