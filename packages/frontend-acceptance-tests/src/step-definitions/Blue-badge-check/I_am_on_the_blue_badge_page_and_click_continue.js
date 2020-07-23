'use strict'

const { defineStep } = require('cucumber')
const blueBadge = require('../../pages/blue-badge')

/**
 1. Step definition access the table defined in the NEG Feature file
 2. Rows relate to rows in table in feature file
 3. ErrorMessage relate to columns in table in feature  file
 4. CheckErrorOnPage function in pages.js page.
 *
 */

defineStep('I expect the blue badge page to show the following errors', function (errorTable) {
  const rows = errorTable.hashes()
  for (const row of rows) {
    blueBadge.checkErrorsOnPage(row.ErrorMessage)
  }
})

defineStep('I am on the blue badge page and I click continue', function () {
  blueBadge.checkUrl()
  blueBadge.continue()
})
