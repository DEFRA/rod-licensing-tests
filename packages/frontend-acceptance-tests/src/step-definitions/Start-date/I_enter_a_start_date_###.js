'use strict'

import { defineStep } from '@cucumber/cucumber'
import StartDatePage from '../../pages/start-kind'

defineStep('I enter date two days from today and click continue', async () => {
  await StartDatePage.checkUrl()
  await StartDatePage.twoDaysFromToday()
  await StartDatePage.continue()
})
