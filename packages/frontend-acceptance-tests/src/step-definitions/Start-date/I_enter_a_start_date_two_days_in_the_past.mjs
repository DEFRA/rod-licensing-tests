'use strict'

import { defineStep } from '@cucumber/cucumber'
import StartDatePage from '../../pages/start-kind.js'

defineStep('I enter date two days in the past and click continue', async () => {
  await StartDatePage.checkUrl()
  await StartDatePage.subtractTwoDaysFromToday()
  await StartDatePage.continue()
})
