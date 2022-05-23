'use strict'

const { defineStep } = require('@cucumber/cucumber')
const StartKindPage = require('../../pages/start-kind')

defineStep(/^I select (Now|AnotherTime) as a start time$/, async (startKind) => {
  await StartKindPage.checkUrl()
  await StartKindPage.setStartKind(startKind)
  await StartKindPage.continue()
})
