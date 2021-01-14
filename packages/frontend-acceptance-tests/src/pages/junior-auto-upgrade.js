import { logger } from 'defra-logging-facade'
import Page from './page'

class JuniorUpgradePage extends Page {
  checkJuniorUpgrade () {
    logger.info('Junior licence page displayed')
  }
}

export default new JuniorUpgradePage('/buy/junior-licence')
