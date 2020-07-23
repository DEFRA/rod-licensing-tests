'use strict'

const { defineStep } = require('cucumber')
const ContactPage = require('../../pages/contact')

defineStep(/^I enter email as "(.*)" and number as "(.*)"$/, function (setEmailAddress, setMobileNumber) {
  ContactPage.checkUrl()
  ContactPage.setContact(setEmailAddress, setMobileNumber)
  ContactPage.continue()
})

defineStep('I click email radio button and click continue', function () {
  ContactPage.checkUrl()
  ContactPage.selectContactEmail()
  ContactPage.continue()
})

defineStep('I click mobile radio button and click continue', function () {
  ContactPage.checkUrl()
  ContactPage.selectContactMobile()
  ContactPage.continue()
})
