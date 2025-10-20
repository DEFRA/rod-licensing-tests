'use strict'

import { defineStep } from '@cucumber/cucumber'
import NewsletterNoPage from '../../pages/newsletter.js'

defineStep('I do not want a newsletter', async () => {
  await NewsletterNoPage.checkUrl()
  await NewsletterNoPage.setNewsletterNo()
  await NewsletterNoPage.continue()
})
