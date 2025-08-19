import { defineStep } from '@cucumber/cucumber'
import FishTypePage from '../../pages/licence-type.js'

defineStep(/^I select a "(.*)" fishing licence$/, async fishType => {
  await FishTypePage.checkUrl()
  await FishTypePage.setFishType(fishType)
  await FishTypePage.continue()
})
