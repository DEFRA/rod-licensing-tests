'use strict'

const { defineStep } = require("@cucumber/cucumber")
const FishTypePage = require('../../pages/licence-type')

defineStep(/^I select a "(.*)" fishing licence$/, function (fishType) {
  FishTypePage.checkUrl()
  FishTypePage.setFishType(fishType)
  FishTypePage.continue()
})
