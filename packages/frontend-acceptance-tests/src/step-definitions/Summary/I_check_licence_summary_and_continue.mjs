'use strict'

import { defineStep } from '@cucumber/cucumber'
import SummaryPage from '../../pages/licence-summary.js'

defineStep('I am on the licence summary page and I click continue', async () => {
  await SummaryPage.continue()
})
