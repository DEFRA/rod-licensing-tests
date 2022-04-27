'use strict'

const { defineStep } = require("@cucumber/cucumber")
const NamePage = require('../../pages/name')

defineStep(/^I enter "(.*)" "(.*)" as the name$/, function (setFirstName, setSurName) {
  NamePage.checkUrl()
  NamePage.setName(setFirstName, setSurName)
  NamePage.continue()
})

defineStep(/^I enter "(.*)" "(.*)" as an invalid name$/, (setFirstName, setSurName) => {
  NamePage.checkUrl()
  NamePage.setName(setFirstName, setSurName)
  NamePage.continue()
})

defineStep(/^I enter "(.*)" "(.*)" as invalid characters$/, function (setFirstName, setSurName) {
  NamePage.checkUrl()
  NamePage.setName(setFirstName, setSurName)
  NamePage.continue()
})
