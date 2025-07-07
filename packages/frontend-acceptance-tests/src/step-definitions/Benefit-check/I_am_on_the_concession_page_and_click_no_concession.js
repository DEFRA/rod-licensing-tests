'use strict'

import { defineStep } from '@cucumber/cucumber'
import noBenefits from '../../pages/concession'

defineStep(/^I enter "(.*)" concession$/, async concession => {
  await noBenefits.checkUrl()
  await noBenefits.setConcession(concession)
  await noBenefits.continue()
})
