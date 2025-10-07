'use strict'

import { defineStep } from '@cucumber/cucumber'
import startKind from '../../pages/start-kind.js'

/**
 1. Step definition access the table defined in the NEG Feature file
 2. Rows relate to rows in table in feature file
 3. ErrorMessage relate to columns in table in feature  file
 4. CheckErrorOnPage function in pages.js page.
 *
 */

defineStep('I expect the start kind page to show the following errors', async errorTable => {
  const rows = await errorTable.hashes()
  for (const row of rows) {
    await startKind.checkErrorsOnPage(row.ErrorMessage)
  }
})
