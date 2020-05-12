'use strict'

const { defineStep } = require('cucumber')
const noRods = require('../../pages/number-of-rods')


/**
 1. Step definition access the table defined in the NEG Feature file
 2. Rows relate to rows in table in feature file
 3. ErrorMessage relate to columns in table in feature  file
 4. CheckErrorOnPage function in pages.js page.
 *
 */

defineStep('I expect the number of rods page to show the following errors', function (errorTable) {
  const rows = errorTable.hashes()
  for (const row of rows) {
    noRods.checkErrorsOnPage(row.ErrorMessage)
  }
})


defineStep('I am on the number of rods page and I click continue', function () {
  noRods.checkUrl()
  //Set expectUrlChange to true if you expect the URL to change.
  noRods.continue()
})



