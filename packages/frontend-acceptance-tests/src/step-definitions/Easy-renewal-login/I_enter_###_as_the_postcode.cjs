const { defineStep } = require('cucumber')
const RenewalsPage = require('../../pages/renew-login')

defineStep(/^I enter "(.*)" as the postcode and click continue$/, function (setRenewPostcode) {
  RenewalsPage.checkUrl()
  RenewalsPage.setRenewalPostcode(setRenewPostcode)
  RenewalsPage.continue()
})
