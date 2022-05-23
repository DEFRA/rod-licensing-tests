'use strict'

const { defineStep } = require('@cucumber/cucumber')
const ContactPage = require('../../pages/contact')

defineStep('I click email radio button and clear the email and click continue', async () => {
  await ContactPage.checkUrl()
  await ContactPage.selectContactEmail()
  await ContactPage.changeEmail()
  await ContactPage.continue()
})
