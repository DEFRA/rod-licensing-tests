'use strict'

import { defineStep } from '@cucumber/cucumber'
import RenewalsPage from '../../pages/renew-login'

defineStep(/^I enter "(.*)" as the postcode and click continue$/, async setRenewPostcode => {
  await RenewalsPage.checkUrl()
  await RenewalsPage.setRenewalPostcode(setRenewPostcode)
  await RenewalsPage.continue()
})
