'use strict'

const { defineStep } = require("@cucumber/cucumber")
const StartKindPage = require('../../pages/start-kind')

defineStep(/^I select (Now|AnotherTime) as a start time$/, function (startKind) {
  StartKindPage.checkUrl()
  StartKindPage.setStartKind(startKind)
  StartKindPage.continue()
})
