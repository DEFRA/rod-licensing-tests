'use strict'

const Page = require('./page')
const { logger } = require('defra-logging-facade')

class SummmaryPage extends Page {
  async typeChange() {
    await $('#change-licence-type').waitForDisplayed(1000)
    logger.info(`On the licence summary page`)
    await $('#change-licence-type').click()
    logger.info(`On the licence type page`)
  }

  async concessionChange() {
    await $('#change-benefit-check').waitForDisplayed(1000)
    logger.info(`On the licence Summary page`)
    await $('#change-benefit-check').click()
    logger.info(`On the Benefit Check page`)
  }

  async startChange() {
    await $('#change-to-start').waitForDisplayed(1000)
    logger.info(`On the licence Summary page`)
    await $('#change-to-start').click()
    logger.info(`On the Start From page`)
  }

  async rodsChange() {
    await $('#change-number-of-rods').waitForDisplayed(1000)
    logger.info(`On the licence Summary page`)
    await $('#change-number-of-rods').click()
    logger.info(`On the Number of Rods page`)
  }
}
module.exports = new SummmaryPage('/buy/licence-summary')
