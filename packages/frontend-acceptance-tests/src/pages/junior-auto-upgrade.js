'use strict'

const { logger } = require('defra-logging-facade')
const Page = require('./page')

class JuniorUpgradePage extends Page {
  checkJuniorUpgrade() {
    logger.info('Junior licence page displayed')
  }
}
module.exports = new JuniorUpgradePage('/buy/junior-licence')
