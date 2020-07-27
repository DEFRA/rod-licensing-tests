'use strict'

const Page = require('./page')
const { logger } = require('defra-logging-facade')

class SummmaryPage extends Page {
  typeChange () {
    $('#change-licence-type').waitForDisplayed(1000)
    logger.info(`On the licence summary page`)
    $('#change-licence-type').click()
    logger.info(`On the licence type page`)
  }

  concessionChange () {
    $('#change-benefit-check').waitForDisplayed(1000)
    logger.info(`On the licence Summary page`)
    $('#change-benefit-check').click()
    logger.info(`On the Benefit Check page`)
  }

  startChange () {
    $('#change-to-start').waitForDisplayed(1000)
    logger.info(`On the licence Summary page`)
    $('#change-to-start').click()
    logger.info(`On the Start From page`)
  }

  rodsChange () {
    $('#change-number-of-rods').waitForDisplayed(1000)
    logger.info(`On the licence Summary page`)
    $('#change-number-of-rods').click()
    logger.info(`On the Number of Rods page`)
  }
}
module.exports = new SummmaryPage('/buy/licence-summary')
