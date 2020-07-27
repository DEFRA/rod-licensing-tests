'use strict'

const { defineStep } = require('cucumber')
const FishTypePage = require('../../pages/licence-type')

defineStep(/^I select a (coarse|salmon) fishing licence$/, function (fishType) {
  FishTypePage.checkUrl()
  FishTypePage.setFishType(fishType)
  FishTypePage.continue()
})
