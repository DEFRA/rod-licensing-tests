'use strict'

const { defineStep } = require('cucumber')
const licenceForPage = require('../../pages/licence-for')

defineStep('I expect the licence for page to show the following errors', function (errorTable) {
  const rows = errorTable.hashes()
  for (const row of rows) {
    licenceForPage.checkErrorsOnPage(row.ErrorMessage)
  }
})
