'use strict'

const { defineStep } = require('@cucumber/cucumber')
const ConfirmationMethod = require('../../pages/confirmation-method')

/**
 1. Step definition access the table defined in the NEG Feature file
 2. Rows relate to rows in table in feature file
 3. ErrorId and ErrorMessage relate to columns in table in feature  file
 4. CheckErrorOnPage functioon in pages.js page.
 *
 */

defineStep('I expect the confirmation method page to show the following errors', async errorTable => {
  const rows = await errorTable.hashes()
  for (const row of rows) {
    await ConfirmationMethod.checkErrorsOnPage(row.ErrorMessage)
  }
})
