'use strict'

import { defineStep } from '@cucumber/cucumber'
import ContactPage from '../../pages/contact.js'

defineStep(/^I enter email as "(.*)" and number as "(.*)"$/, async (setEmailAddress, setMobileNumber) => {
  await ContactPage.checkUrl()
  await ContactPage.setContact(setEmailAddress, setMobileNumber)
  await ContactPage.continue()
})
