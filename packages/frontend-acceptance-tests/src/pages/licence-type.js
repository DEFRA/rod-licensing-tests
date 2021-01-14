import Page from './page'
import { logger } from 'defra-logging-facade'

class FishTypePage extends Page {
  setFishType (fishType) {
    logger.info(`Licence Type selected as: ${fishType}`)
    switch (fishType) {
      case 'coarse2':
        return $('#selector-trout-and-coarse-2-rod').click()
      case 'coarse3':
        return $('#selector-trout-and-coarse-3-rod').click()
      case 'salmon':
        return $('#selector-salmon-and-sea-trout').click()
    }
  }
}

export default new FishTypePage('/buy/licence-type')
