'use strict'

const { defineStep } = require('cucumber')
const name = require('../../pages/name')

/**
 1. Step definition access the table defined in the NEG Feature file
 2. Rows relate to rows in table in feature file
 3. ErrorId and ErrorMessage relate to columns in table in feature  file
 4. CheckErrorOnPage functioon in pages.js page.
 *
 */

defineStep('I expect the name page to show the following errors', function (errorTable) {
  const rows = errorTable.hashes()
  for (const row of rows) {
    name.checkErrorsOnPage(row.ErrorMessage)
  }
})

defineStep('I am on the name page and I click continue', function () {
  name.continue()
})
