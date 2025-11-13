'use strict'

import Page from './page.js'
const logger = require('../lib/logger-utils.js')

class JuniorUpgradePage extends Page {
  checkJuniorUpgrade () {
    info('Junior licence page displayed')
  }
}

export default new JuniorUpgradePage('/buy/junior-licence')
