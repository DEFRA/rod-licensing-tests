'use strict'

const Page = require('./page')
const { logger } = require('defra-logging-facade')

class BlueBadgePage extends Page {
  setBlueBadge (blueBadge) {
    switch (blueBadge) {
      case 'yes':
        logger.info(`Blue Badge holder: ${blueBadge}`)
        return this.click('#blue-badge-check')
      case 'no':
        logger.info(`Blue Badge holder: ${blueBadge}`)
        return this.click('#blue-badge-check-2')
    }
  }
}
module.exports = new BlueBadgePage('/buy/blue-badge-check')
