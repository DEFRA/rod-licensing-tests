'use strict'

import { defineStep } from '@cucumber/cucumber'
import licenceLength from '../../pages/licence-length.js'

defineStep(/^I select a (12MonthLicence|8dayLicence|1dayLicence) licence$/, async licenceDuration => {
  await licenceLength.checkUrl()
  await licenceLength.setLicenceDuration(licenceDuration)
  await licenceLength.continue()
})
