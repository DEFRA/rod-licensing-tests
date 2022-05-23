'use strict'

const { defineStep } = require('@cucumber/cucumber')
const licenceForPage = require('../../pages/licence-for')

defineStep('I expect the licence for page to show the following errors', async (errorTable) => {
  const rows = await errorTable.hashes()
  for (const row of rows) {
    await licenceForPage.checkErrorsOnPage(row.ErrorMessage)
  }
})
