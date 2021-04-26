'use strict'

const { defineStep } = require('cucumber')
const addressEntry = require('../../pages/address-entry')

defineStep('I expect the address entry page to show the following errors', function (errorTable) {
  const rows = errorTable.hashes()
  for (const row of rows) {
    addressEntry.checkErrorsOnPage(row.ErrorMessage)
  }
})
