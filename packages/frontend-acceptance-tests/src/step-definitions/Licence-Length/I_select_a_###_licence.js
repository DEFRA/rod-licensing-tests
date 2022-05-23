'use strict'
const { defineStep } = require('@cucumber/cucumber')
const licenceLength = require('../../pages/licence-length')

defineStep(/^I select a (12MonthLicence|8dayLicence|1dayLicence) licence$/, async (licenceDuration) => {
  await licenceLength.checkUrl()
  await licenceLength.setLicenceDuration(licenceDuration)
  await licenceLength.continue()
})
