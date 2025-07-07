'use strict'

import { defineStep } from '@cucumber/cucumber'
import StartTimePage from '../../pages/start-time'

defineStep(/^I enter a start time of "(.*)"$/, async time => {
  await StartTimePage.checkUrl()
  await StartTimePage.startTimePicker(time)
  await StartTimePage.continue()
})
