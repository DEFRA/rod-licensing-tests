'use strict'

import { defineStep } from '@cucumber/cucumber'
import contactDetails from '../../pages/contact.js'

/**
 1. Step definition access the table defined in the NEG Feature file
 2. Rows relate to rows in table in feature file
 3. ErrorId and ErrorMessage relate to columns in table in feature  file
 4. CheckErrorOnPage functioon in pages.js page.
 *
 */

defineStep('I expect the contact details page to show the following errors', async errorTable => {
  const rows = await errorTable.hashes()
  for (const row of rows) {
    await contactDetails.checkErrorsOnPage(row.ErrorMessage)
  }
})
