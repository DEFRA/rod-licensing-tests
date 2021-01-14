import { logger } from 'defra-logging-facade'
import Page from './page'

class PaymentCancelled extends Page {
  exitService () {
    $('=Buy another licence').click()
    logger.info('Exit Service')
  }

  retryPayment () {
    $('.button').click()
    logger.info('Retrying payment')
  }
}

export default new PaymentCancelled('/govpay/failure')
