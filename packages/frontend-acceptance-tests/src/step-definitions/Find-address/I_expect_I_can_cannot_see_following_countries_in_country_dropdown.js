'use strict'

import { defineStep } from '@cucumber/cucumber'
import addressEntry from '../../pages/address-entry'

defineStep(/^I expect that I (can|cannot) see the following countries in the country dropdown$/, async (canSee, countriesTable) => {
  const shouldExist = canSee === 'can'
  const rows = await countriesTable.hashes()
  for (const row of rows) {
    await addressEntry.checkCountryInDropDown(row.country, shouldExist)
  }
})
