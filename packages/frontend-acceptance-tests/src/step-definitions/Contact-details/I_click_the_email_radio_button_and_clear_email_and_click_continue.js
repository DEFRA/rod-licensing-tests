'use strict'

const { defineStep } = require('@cucumber/cucumber')
const ContactPage = require('../../pages/contact')

defineStep('I click email radio button and clear the email and click continue', function () {
  ContactPage.checkUrl()
  ContactPage.selectContactEmail()
  ContactPage.changeEmail()
  ContactPage.continue()
})
