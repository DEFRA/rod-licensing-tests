'use strict'
const assert = require('assert')
const Page = require('./page')
const { logger } = require('defra-logging-facade')

class ConcessionPage extends Page {
  setConcession (concession) {
    switch (concession) {
      case 'yes':
        return this.click('benefit-check')
        logger.info(`Receiving Benefits: ${concession}`)
        break
      case 'no':
        return this.click('benefit-check-2')
        logger.info(`Receiving Benefits: ${concession}`)
        break
    }
  }
}
module.exports = new ConcessionPage('/buy/benefit-check')
