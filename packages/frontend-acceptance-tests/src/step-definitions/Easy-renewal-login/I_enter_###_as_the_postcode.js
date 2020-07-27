const { defineStep } = require('cucumber')

defineStep(/^I enter "(.*)" as the postcode and click continue$/, function (setRenewPostcode) {
  $.renewal.checkUrl()
  $.renewal.setRenewalPostcode(setRenewPostcode)
  $.renewal.continue()
})
