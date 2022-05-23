'use strict'

const { defineStep } = require('@cucumber/cucumber')
const NewsletterNoPage = require('../../pages/newsletter')

defineStep('I do not want a newsletter', async () => {
  await NewsletterNoPage.checkUrl()
  await NewsletterNoPage.setNewsletterNo()
  await NewsletterNoPage.continue()
})
