'use strict'

import { defineStep } from '@cucumber/cucumber'
import StartKindPage from '../../pages/start-kind.js'

defineStep(/^I select (Now|AnotherTime) as a start time$/, async startKind => {
  await StartKindPage.checkUrl()
  await StartKindPage.setStartKind(startKind)
  await StartKindPage.continue()
})
