'use strict'

import { defineStep } from '@cucumber/cucumber'
import ContactPage from '../../pages/contact'

defineStep('I do not have either of these', async () => {
  await ContactPage.checkUrl()
  await ContactPage.setNoContact()
  await ContactPage.continue()
})
