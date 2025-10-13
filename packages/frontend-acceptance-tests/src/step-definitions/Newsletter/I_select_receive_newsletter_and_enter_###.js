'use strict'

import { defineStep } from '@cucumber/cucumber'
import NewsletterPage from '../../pages/newsletter.js'

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
