'use strict'

import { defineStep } from '@cucumber/cucumber'
import ContactPage from '../../pages/contact.js'

defineStep('I click email radio button and clear the email and click continue', async () => {
  await ContactPage.checkUrl()
  await ContactPage.selectContactEmail()
  await ContactPage.changeEmail()
  await ContactPage.continue()
})
