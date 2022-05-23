'use strict'

const { defineStep } = require('@cucumber/cucumber')
const DOB = require('../../pages/set-dob')

/**
 1. Step definition access the table defined in the NEG Feature file
 2. Rows relate to rows in table in feature file
 3. ErrorId and ErrorMessage relate to columns in table in feature  file
 4. CheckErrorOnPage functioon in pages.js page.
 *
 */

defineStep('I expect the dob page to show the following errors', async (errorTable) => {
  const rows = await errorTable.hashes()
  for (const row of rows) {
    await DOB.checkErrorsOnPage(row.ErrorMessage)
  }
})
