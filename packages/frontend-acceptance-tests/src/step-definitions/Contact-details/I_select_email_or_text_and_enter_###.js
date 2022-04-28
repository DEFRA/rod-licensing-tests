'use strict'

const { defineStep } = require('@cucumber/cucumber')
const ContactPage = require('../../pages/contact')

defineStep(/^I enter email as "(.*)" and number as "(.*)"$/, function (setEmailAddress, setMobileNumber) {
  ContactPage.checkUrl()
  ContactPage.setContact(setEmailAddress, setMobileNumber)
  ContactPage.continue()
})
