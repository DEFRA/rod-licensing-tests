'use strict'

const Page = require('./page')
const { logger } = require('defra-logging-facade')

class ConcessionPage extends Page {
  setConcession (concession) {
    switch (concession) {
      case 'yes':
        logger.info(`Receiving Benefits: ${concession}`)
        return $('#benefit-check').click()
      case 'no':
        logger.info(`Receiving Benefits: ${concession}`)
        return $('#benefit-check-2').click()
    }
  }
}
module.exports = new ConcessionPage('/buy/benefit-check')
