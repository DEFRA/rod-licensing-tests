import { logger } from 'defra-logging-facade'
import Page from './page'

class OrderConfirmPage extends Page {
  checkOrderConfirmationPage () {
    // TODO: Howard - talk to Graham and get him to add an ID with the permission number
    $('#permissionNumber').waitForDisplayed(1000)
    logger.info('On the Permission Confirmation page - Order Complete')
  }

  getPermissionNumber () {
    // TODO: Howard - talk to Graham and get him to add an ID with the permission number
    return $('div.govuk-panel--confirmation > div > strong').getText()
  }
}

export default new OrderConfirmPage('/buy/order-complete')
