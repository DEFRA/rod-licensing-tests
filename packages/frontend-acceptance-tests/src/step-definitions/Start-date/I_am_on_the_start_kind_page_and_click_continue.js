'use strict'

import { defineStep } from '@cucumber/cucumber'
import startKind from '../../pages/start-kind'

defineStep('I am on the start kind page and I click continue', async () => {
  await startKind.checkUrl()
  await startKind.continue()
})
