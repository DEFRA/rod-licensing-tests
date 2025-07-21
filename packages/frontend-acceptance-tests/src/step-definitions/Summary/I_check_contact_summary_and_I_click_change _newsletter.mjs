'use strict'

import { defineStep } from '@cucumber/cucumber'
import SummaryPage from '../../pages/contact-summary.js'

defineStep('I am on the contact summary page and I click change newsletter', async () => {
  await SummaryPage.newsletterChange()
})
