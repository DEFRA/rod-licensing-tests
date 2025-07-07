'use strict'

import { defineStep } from '@cucumber/cucumber'
import ConcessionPage from '../../pages/concession'

defineStep(/^I select "(.*)" as the concession$/, async (concession) => {
  await ConcessionPage.checkUrl()
  await ConcessionPage.setConcession(concession)
  await ConcessionPage.continue()
})
