'use strict'

const { defineStep } = require('@cucumber/cucumber')
const ContactPage = require('../../pages/contact')

defineStep('I do not have either of these', async () => {
  await ContactPage.checkUrl()
  await ContactPage.setNoContact()
  await ContactPage.continue()
})
