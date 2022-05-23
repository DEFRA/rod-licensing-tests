'use strict'

const { defineStep } = require('@cucumber/cucumber')
const addressEntry = require('../../pages/address-entry')

defineStep('I expect the address entry page to show the following errors', async errorTable => {
  const rows = await errorTable.hashes()
  for (const row of rows) {
    await addressEntry.checkErrorsOnPage(row.ErrorMessage)
  }
})
