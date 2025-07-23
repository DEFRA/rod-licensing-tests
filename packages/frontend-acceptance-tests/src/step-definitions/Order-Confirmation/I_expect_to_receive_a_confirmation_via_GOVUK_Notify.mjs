'use strict'

import { defineStep } from '@cucumber/cucumber'
import notificationCheck from '../../lib/checkNotifications.mjs'
import OrderConfirmPage from '../../pages/order-complete.js'

defineStep(/^I expect to receive a confirmation via GOV.UK Notify$/, { timeout: 2000000 }, async () => {
  const permissionNumber = await OrderConfirmPage.getPermissionNumber()
  await browser.call(async () => {
    const notified = await notificationCheck.checkNotificationSentForPermission(permissionNumber)
    if (!notified) {
      throw new Error(`Notification not sent for '${permissionNumber}'`)
    }
  })
})
