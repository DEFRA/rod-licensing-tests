'use strict'

const { defineStep } = require('cucumber')
const ContactPage = require('../../pages/contact')

defineStep('I click mobile radio button and click continue', function () {
  ContactPage.checkUrl()
  ContactPage.selectContactMobile()
  ContactPage.continue()
})
