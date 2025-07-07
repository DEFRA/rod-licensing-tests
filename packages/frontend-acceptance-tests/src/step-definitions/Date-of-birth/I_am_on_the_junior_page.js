'use strict'

import { defineStep } from '@cucumber/cucumber'
import JuniorPage from '../../pages/junior-auto-upgrade'

defineStep('I am on the junior page and I click continue', async () => {
  await JuniorPage.checkJuniorUpgrade()
  await JuniorPage.continue()
})
