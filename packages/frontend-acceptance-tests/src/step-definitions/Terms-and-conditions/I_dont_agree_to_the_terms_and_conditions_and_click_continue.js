'use strict'

import { defineStep } from '@cucumber/cucumber'
import termsCon from '../../pages/terms-and-conditions.js'

defineStep('I dont agree to the terms and conditions and I click continue', async () => {
  await termsCon.checkUrl()
  await termsCon.continue()
})
