'use strict'

const assert = require('assert')
const Page = require('./page')
const { logger } = require('defra-logging-facade')

class StartWhenPage extends Page {
  setStartKind (startKind) {
    switch (startKind) {
      case 'Now':
        return $('#licence-to-start').click()
        break
      case 'AnotherTime':
        return $('#licence-to-start-2').click()
        break
    }
    çç
  }
}
module.exports = new StartWhenPage('/buy/start-kind')
