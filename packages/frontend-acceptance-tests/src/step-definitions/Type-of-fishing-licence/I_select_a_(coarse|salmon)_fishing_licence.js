'use strict'

import { defineStep } from '@cucumber/cucumber'
import FishTypePage from '../../pages/licence-type'

defineStep(/^I select a "(.*)" fishing licence$/, async fishType => {
  await FishTypePage.checkUrl()
  await FishTypePage.setFishType(fishType)
  await FishTypePage.continue()
})
