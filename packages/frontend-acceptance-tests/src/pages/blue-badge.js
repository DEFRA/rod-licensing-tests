'use strict'

const assert = require('assert')
const Page = require('./page')
const { logger } = require('defra-logging-facade')

class BlueBadgePage extends Page {
  setBlueBadge (blueBadge) {
    switch (blueBadge) {
      case 'yes':
        return this.click('blue-badge-check')
        logger.info(`Blue Badge holder: ${blueBadge}`)
        break
      case 'no':
        return this.click('blue-badge-check-2')
        logger.info(`Blue Badge holder: ${blueBadge}`)
        break
    }
  }
}
module.exports = new BlueBadgePage('/buy/blue-badge-check')
