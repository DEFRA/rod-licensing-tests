const { defineStep } = require('@cucumber/cucumber')
const RenewalsPage = require('../../pages/renew-login')

defineStep(/^I enter "(.*)" as the postcode and click continue$/, async (setRenewPostcode) => {
  await RenewalsPage.checkUrl()
  await RenewalsPage.setRenewalPostcode(setRenewPostcode)
  await RenewalsPage.continue()
})
