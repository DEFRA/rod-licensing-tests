'use strict'

const { defineStep } = require('cucumber')
const { core } = require('defra-wdio-core')
const NumberOfRodsPage = require('../../pages/number-of-rods')

defineStep(/^I select up to (2|3) trout rod licence$/, function (numberOfRods) {
  NumberOfRodsPage.checkUrl()
  NumberOfRodsPage.setNumberOfRods(numberOfRods)
  NumberOfRodsPage.clickButtonByText()
})
