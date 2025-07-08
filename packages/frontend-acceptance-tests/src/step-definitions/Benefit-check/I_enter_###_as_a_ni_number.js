'use strict'

import { defineStep } from '@cucumber/cucumber'
import ConcessionPage from '../../pages/concession.js'

defineStep(/^I enter "(.*)" as the ni concession and I enter "(.*)" as the concesssion id$/, async (concession, setNiNum) => {
  await ConcessionPage.checkUrl()
  await ConcessionPage.setConcession(concession)
  await ConcessionPage.setNiNumber(setNiNum)
  await ConcessionPage.continue()
})
