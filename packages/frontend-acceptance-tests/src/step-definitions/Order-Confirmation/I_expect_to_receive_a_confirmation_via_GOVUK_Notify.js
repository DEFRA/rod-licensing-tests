'use strict'
const { defineStep } = require('@cucumber/cucumber')
const notificationCheck = require('../../lib/checkNotifications')
const OrderConfirmPage = require('../../pages/order-complete')

defineStep(/^I expect to receive a confirmation via GOV.UK Notify$/, { timeout: 2000000 }, async () => {
  const permissionNumber = await OrderConfirmPage.getPermissionNumber()
  await browser.call(async () => {
    const notified = await notificationCheck.checkNotificationSentForPermission(permissionNumber)
    if (!notified) {
      throw new Error(`Notification not sent for '${permissionNumber}'`)
    }
  })
})
