'use strict'

import { defineStep } from '@cucumber/cucumber'
import NamePage from '../../pages/name.js'

defineStep(/^I enter "(.*)" "(.*)" as the name$/, async (setFirstName, setSurName) => {
  await NamePage.checkUrl()
  await NamePage.setName(setFirstName, setSurName)
  await NamePage.continue()
})

defineStep(/^I enter "(.*)" "(.*)" as an invalid name$/, async (setFirstName, setSurName) => {
  await NamePage.checkUrl()
  await NamePage.setName(setFirstName, setSurName)
  await NamePage.continue()
})

defineStep(/^I enter "(.*)" "(.*)" as invalid characters$/, async (setFirstName, setSurName) => {
  await NamePage.checkUrl()
  await NamePage.setName(setFirstName, setSurName)
  await NamePage.continue()
})
