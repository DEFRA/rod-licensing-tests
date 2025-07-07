'use strict'

import { defineStep } from '@cucumber/cucumber'
import startDate from '../../pages/start-time'

defineStep('I am on the start time page and I click continue', async () => {
  await startDate.checkUrl()
  await startDate.continue()
})
