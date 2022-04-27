'use strict'

const { defineStep } = require('@cucumber/cucumber')
const licenceType = require('../../pages/licence-type')

/**
 1. Step definition access the table defined in the NEG Feature file
 2. Rows relate to rows in table in feature file
 3. ErrorMessage relate to columns in table in feature  file
 4. CheckErrorOnPage function in pages.js page.
 *
 */

defineStep('I am on the type of fish page and I click continue', function () {
  licenceType.continue()
})
