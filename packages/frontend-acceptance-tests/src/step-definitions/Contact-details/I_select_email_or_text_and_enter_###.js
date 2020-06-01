'use strict'

const { defineStep } = require('cucumber')
const { core } = require('defra-wdio-core')
const ContactPage = require('../../pages/contact')

defineStep(/^I enter email as "(.*)" and number as "(.*)"$/, function(setEmailAddress, setMobileNumber){
  ContactPage.checkUrl()
  ContactPage.setContact(setEmailAddress, setMobileNumber)
  ContactPage.click('button','Continue', true)
})


defineStep(/^I enter no email as "(.*)" and number as "(.*)"$/, function(setEmailAddress, setMobileNumber){
  ContactPage.checkUrl()
  ContactPage.setContact(setEmailAddress, setMobileNumber)
  ContactPage.continue()
})
