'use strict'

const { defineStep } = require('@cucumber/cucumber')
const FishTypePage = require('../../pages/licence-type')

defineStep(/^I select a "(.*)" fishing licence$/, async fishType => {
  await FishTypePage.checkUrl()
  await FishTypePage.setFishType(fishType)
  await FishTypePage.continue()
})
