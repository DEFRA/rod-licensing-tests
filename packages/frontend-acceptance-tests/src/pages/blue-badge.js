'use strict'

const Page = require('./page')
const { logger } = require('defra-logging-facade')

class BlueBadgePage extends Page {
  setBlueBadge (blueBadge) {
    switch (blueBadge) {
      case 'yes':
        logger.info(`Blue Badge holder: ${blueBadge}`)
        return $('#blue-badge-check').click()
      case 'no':
        logger.info(`Blue Badge holder: ${blueBadge}`)
        return $('#blue-badge-check-2').click()
    }
  }
}
module.exports = new BlueBadgePage('/buy/blue-badge-check')
