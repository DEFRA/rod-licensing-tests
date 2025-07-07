'use strict'

import { defineStep } from '@cucumber/cucumber'
import nothingSelected from '../../pages/concession'

defineStep('I am on the concession page and I click continue', async () => {
  await nothingSelected.checkUrl()
  await nothingSelected.continue()
})
