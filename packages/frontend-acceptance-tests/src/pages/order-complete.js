'use strict'

import Page from './page.js'
const logger = require('../lib/logger-utils.js')

class OrderConfirmPage extends Page {
  async checkOrderConfirmationPage () {
    // TODO: Howard - talk to Graham and get him to add an ID with the permission number
    await $('#permissionNumber').waitForDisplayed(1000)
    info(`On the Permission Confirmation page - Order Complete`)
  }

  async getPermissionNumber () {
    // TODO: Howard - talk to Graham and get him to add an ID with the permission number
    return $('div.govuk-panel--confirmation > div > strong').getText()
  }
}

export default new OrderConfirmPage('/buy/order-complete')
