'use strict'

const { defineStep } = require('@cucumber/cucumber')
const NewsletterPage = require('../../pages/newsletter')

defineStep(/^I receive a newsletter and enter "(.*)"$/, async setEmailAddress => {
  await NewsletterPage.checkUrl()
  await NewsletterPage.setNewsletterYes(setEmailAddress)
  await NewsletterPage.continue()
})

defineStep(/^I receive a newsletter and enter no email "(.*)"$/, async setEmailAddress => {
  await NewsletterPage.checkUrl()
  await NewsletterPage.setNewsletterYes(setEmailAddress)
  await NewsletterPage.continue()
})
