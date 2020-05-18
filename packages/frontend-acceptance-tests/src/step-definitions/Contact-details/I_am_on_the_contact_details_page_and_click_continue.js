'use strict'

const { defineStep } = require('cucumber')
const contactDetails = require('../../pages/contact-summary')


/**
 1. Step definition access the table defined in the NEG Feature file
 2. Rows relate to rows in table in feature file
 3. ErrorId and ErrorMessage relate to columns in table in feature  file
 4. CheckErrorOnPage functioon in pages.js page.
 *
 */

defineStep('I expect the contact details page to show the following errors', function (errorTable) {
  const rows = errorTable.hashes()
  for (const row of rows) {
    contactDetails.checkErrorsOnPage(row.ErrorMessage)
  }
})


defineStep('I am on the contact details page and I click continue', function () {
  contactDetails.checkUrl()
  //Set expectUrlChange to true if you expect the URL to change.
  contactDetails.continue()
})



