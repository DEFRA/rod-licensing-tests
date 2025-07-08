'use strict'

import { logger } from 'defra-logging-facade.js'
import Page from './page.js'

class JuniorUpgradePage extends Page {
  checkJuniorUpgrade () {
    logger.info('Junior licence page displayed')
  }
}

export default new JuniorUpgradePage('/buy/junior-licence')
