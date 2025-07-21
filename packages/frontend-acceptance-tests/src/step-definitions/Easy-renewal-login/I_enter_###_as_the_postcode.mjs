'use strict'

import { defineStep } from '@cucumber/cucumber'
import RenewalsPage from '../../pages/renew-login.js'

defineStep(/^I enter "(.*)" as the postcode and click continue$/, async setRenewPostcode => {
  await RenewalsPage.checkUrl()
  await RenewalsPage.setRenewalPostcode(setRenewPostcode)
  await RenewalsPage.continue()
})
