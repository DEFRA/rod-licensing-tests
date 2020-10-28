import Page from './page'
import { logger } from 'defra-logging-facade'

class ConcessionPage extends Page {
  setConcession (concession) {
    switch (concession) {
      case 'Benefit':
        logger.info(`Receiving Benefits: ${concession}`)
        return $('#disability-concession').click()
      case 'BlueBadge':
        logger.info(`Receiving Benefits: ${concession}`)
        return $('#disability-concession-2').click()
      case 'No':
        logger.info(`Receiving Benefits: ${concession}`)
        return $('#disability-concession-3').click()
    }
  }

  setBBNumber (setBBNum) {
    $('#blue-badge-number').setValue(setBBNum)
    logger.info(`Blue Badge holder: ${setBBNum}`)
  }

  setNiNumber (setNiNum) {
    logger.info(`National Insurance number added: ${setNiNum}`)
    $('#ni-number').setValue(setNiNum)
  }
}

export default new ConcessionPage('/buy/disability-concession')
