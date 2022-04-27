'use strict'
const { defineStep } = require("@cucumber/cucumber")
const licenceLength = require('../../pages/licence-length')

defineStep(/^I select a (12MonthLicence|8dayLicence|1dayLicence) licence$/, function (licenceDuration) {
  licenceLength.checkUrl()
  licenceLength.setLicenceDuration(licenceDuration)
  licenceLength.continue()
})
