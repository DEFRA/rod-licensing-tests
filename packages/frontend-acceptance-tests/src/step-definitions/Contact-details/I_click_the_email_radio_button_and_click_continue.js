'use strict'

import { defineStep } from '@cucumber/cucumber'
import ContactPage from '../../pages/contact.js'

defineStep('I click email radio button and click continue', async () => {
  await ContactPage.checkUrl()
  await ContactPage.selectContactEmail()
  await ContactPage.continue()
})
