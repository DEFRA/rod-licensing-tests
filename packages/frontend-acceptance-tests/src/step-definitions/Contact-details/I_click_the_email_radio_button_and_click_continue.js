'use strict'

const { defineStep } = require('cucumber')
const ContactPage = require('../../pages/contact')

defineStep('I click email radio button and click continue', function () {
  ContactPage.checkUrl()
  ContactPage.selectContactEmail()
  ContactPage.continue()
})

