const { defineStep } = require('cucumber')
const RenewalsPage = require('../../pages/renew-login')

defineStep(/^I am on the renewal login page with "(.*)" as the permission$/, function (setPermission) {
  $.renewal = new RenewalsPage('buy/renew/identify/' + setPermission)
  $.renewal.open()
  $.renewal.checkUrl()
})
