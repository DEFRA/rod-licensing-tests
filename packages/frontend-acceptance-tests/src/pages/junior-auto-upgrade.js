'use strict'

import Page from './page.js'
import logger from '../lib/logger-utils.js'

class JuniorUpgradePage extends Page {
  checkJuniorUpgrade () {
    logger.info('Junior licence page displayed')
  }
}

export default new JuniorUpgradePage('/buy/junior-licence')
