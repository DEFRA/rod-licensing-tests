'use strict'

const { defineStep } = require('@cucumber/cucumber')
const ContactPage = require('../../pages/contact')

defineStep(/^I enter email as "(.*)" and number as "(.*)"$/, async (setEmailAddress, setMobileNumber) => {
  await ContactPage.checkUrl()
  await ContactPage.setContact(setEmailAddress, setMobileNumber)
  await ContactPage.continue()
})
