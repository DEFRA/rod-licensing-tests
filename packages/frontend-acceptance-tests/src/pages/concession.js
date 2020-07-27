'use strict'

const Page = require('./page')
const { logger } = require('defra-logging-facade')

class ConcessionPage extends Page {
  setConcession (concession) {
    switch (concession) {
      case 'yes':
        logger.info(`Receiving Benefits: ${concession}`)
        return this.click('#benefit-check')
      case 'no':
        logger.info(`Receiving Benefits: ${concession}`)
        return this.click('#benefit-check-2')
    }
  }
}
module.exports = new ConcessionPage('/buy/benefit-check')
