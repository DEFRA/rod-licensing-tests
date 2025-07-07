'use strict'

import { defineStep } from '@cucumber/cucumber'
import SummaryPage from '../../pages/licence-summary'

defineStep('I am on the licence summary page and I click the change type link', async () => {
  await SummaryPage.typeChange()
})
