'use strict'

import { defineStep } from '@cucumber/cucumber'
import ContactPage from '../../pages/contact'

defineStep('I click mobile radio button and click continue', async () => {
  await ContactPage.checkUrl()
  await ContactPage.selectContactMobile()
  await ContactPage.continue()
})
