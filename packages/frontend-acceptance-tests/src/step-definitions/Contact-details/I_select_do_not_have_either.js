'use strict'

const { defineStep } = require('cucumber')
const ContactPage = require('../../pages/contact')

defineStep('I do not have either of these', function () {
  ContactPage.checkUrl()
  // ContactPage.setContact(null, null)
  ContactPage.setNoContact()
  ContactPage.continue()
})
