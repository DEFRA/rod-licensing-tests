'use strict'

import { logger } from 'defra-logging-facade.js'
import Page from './page.js'

class OrderConfirmPage extends Page {
  async checkOrderConfirmationPage () {
    // TODO: Howard - talk to Graham and get him to add an ID with the permission number
    await $('#permissionNumber').waitForDisplayed(1000)
    logger.info(`On the Permission Confirmation page - Order Complete`)
  }

  async getPermissionNumber () {
    // TODO: Howard - talk to Graham and get him to add an ID with the permission number
    return $('div.govuk-panel--confirmation > div > strong').getText()
  }
}

export default new OrderConfirmPage('/buy/order-complete')
