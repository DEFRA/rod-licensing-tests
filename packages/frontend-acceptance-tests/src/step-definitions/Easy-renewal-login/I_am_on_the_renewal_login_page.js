'use strict'

import { defineStep } from '@cucumber/cucumber'
import RenewalsPage from '../../pages/renew-login'

defineStep(/^I am on the renewal login page with "(.*)" as the permission$/, async setPermission => {
  await browser.url('/renew/' + setPermission)
  await RenewalsPage.checkUrl()
})
