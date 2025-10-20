'use strict'

import { defineStep } from '@cucumber/cucumber'
import licenceForPage from '../../pages/licence-for.js'

defineStep('I expect the licence for page to show the following errors', async errorTable => {
  const rows = await errorTable.hashes()
  for (const row of rows) {
    await licenceForPage.checkErrorsOnPage(row.ErrorMessage)
  }
})
