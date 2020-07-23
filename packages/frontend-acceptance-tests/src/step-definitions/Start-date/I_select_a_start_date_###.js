'use strict'

const { defineStep } = require('cucumber')
const StartKindPage = require('../../pages/start-kind')

defineStep(/^I select (Now|AnotherTime) as a start time$/, function (startKind) {
  StartKindPage.setStartKind(startKind)
  StartKindPage.continue()
})
