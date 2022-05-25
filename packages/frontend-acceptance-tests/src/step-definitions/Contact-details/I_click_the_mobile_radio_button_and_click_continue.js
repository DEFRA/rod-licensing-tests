'use strict'

const { defineStep } = require('@cucumber/cucumber')
const ContactPage = require('../../pages/contact')

defineStep('I click mobile radio button and click continue', async () => {
  await ContactPage.checkUrl()
  await ContactPage.selectContactMobile()
  await ContactPage.continue()
})
