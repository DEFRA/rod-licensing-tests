'use strict'

const { defineStep } = require('@cucumber/cucumber')
const ContactPage = require('../../pages/contact')

defineStep('I do not have either of these', function () {
  ContactPage.checkUrl()
  ContactPage.setNoContact()
  ContactPage.continue()
})
