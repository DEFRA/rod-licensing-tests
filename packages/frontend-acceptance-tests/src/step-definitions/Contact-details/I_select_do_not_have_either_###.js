'use strict'

const { defineStep } = require('cucumber')
const { core } = require('defra-wdio-core')
const ContactPage = require('../../pages/contact-summary')

defineStep('I do not wish to be contacted', function(){
  ContactPage.checkUrl()
 // ContactPage.setContact(null, null)
  ContactPage.setNoContact()
  ContactPage.click('button','Continue',true)
})
