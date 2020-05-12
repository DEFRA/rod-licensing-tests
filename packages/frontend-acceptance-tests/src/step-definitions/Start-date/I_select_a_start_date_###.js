'use strict'

const { defineStep } = require('cucumber')
const { core } = require('defra-wdio-core')
const StartKindPage = require('../../pages/start-kind')

defineStep(/^I select (Now|AnotherTime) as a start time$/,  function (startKind) {
  StartKindPage.setStartKind(startKind)
  StartKindPage.click('button', 'Continue', true)
})
