'use strict'

import { defineStep } from '@cucumber/cucumber'
import SummaryPage from '../../pages/licence-summary.js'

defineStep('I am on the licence summary page and I click the change disability support link', async () => {
  await SummaryPage.concessionChange()
})
