'use strict'

const { defineStep } = require('cucumber')
const NamePage = require('../../pages/name')

defineStep(/^I enter "(.*)" "(.*)" as the name$/, function (setFirstName, setSurName) {
  NamePage.checkUrl()
  NamePage.setName(setFirstName, setSurName)
  //Set expectUrlChange to true if you expect the URL to change.
  NamePage.click('button', 'Continue', true)
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
