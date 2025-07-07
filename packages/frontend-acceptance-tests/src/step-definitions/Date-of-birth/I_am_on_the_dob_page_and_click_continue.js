'use strict'

import { defineStep } from '@cucumber/cucumber'
import DOB from '../../pages/set-dob'

defineStep('I am on the dob page and I click continue', async () => {
  await DOB.continue()
})
