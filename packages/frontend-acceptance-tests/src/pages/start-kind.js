'use strict'
const Page = require('./page')
const { logger } = require('defra-logging-facade')

class StartWhenPage extends Page {
  setStartKind (startKind) {
    switch (startKind) {
      case 'Now':
        logger.info(`Now selected`)
        return $('#licence-to-start').click()
      case 'AnotherTime':
        logger.info(`Another time selected`)
        return $('#licence-to-start-2').click()
    }
  }
}
module.exports = new StartWhenPage('/buy/start-kind')
