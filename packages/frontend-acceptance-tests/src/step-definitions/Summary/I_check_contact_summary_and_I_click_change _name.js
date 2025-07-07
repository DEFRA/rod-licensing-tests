'use strict'

import { defineStep } from '@cucumber/cucumber'
import SummaryPage from '../../pages/contact-summary'

defineStep('I am on the contact summary page and I click change name', async () => {
  await SummaryPage.nameChange()
})
