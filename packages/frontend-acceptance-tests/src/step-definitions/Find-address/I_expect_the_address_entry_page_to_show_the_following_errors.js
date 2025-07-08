'use strict'

import { defineStep } from '@cucumber/cucumber'
import addressEntry from '../../pages/address-entry.js'

defineStep('I expect the address entry page to show the following errors', async errorTable => {
  const rows = await errorTable.hashes()
  for (const row of rows) {
    await addressEntry.checkErrorsOnPage(row.ErrorMessage)
  }
})
