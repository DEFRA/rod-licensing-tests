const { defineStep } = require("@cucumber/cucumber")
const RenewalsPage = require('../../pages/renew-login')

defineStep(/^I am on the renewal login page with "(.*)" as the permission$/, function (setPermission) {
  browser.url('/renew/' + setPermission)
  RenewalsPage.checkUrl()
})
