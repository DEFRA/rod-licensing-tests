'use strict'

import { defineStep } from '@cucumber/cucumber'
import ConfirmContactDetails from '../../pages/confirm-contact-details.js'

defineStep(
  /^I am on the confirm contact details page and it asks me to confirm my (email address|phone number) and I click correct$/,
  async contactMethod => {
    await ConfirmContactDetails.checkUrl()
    await ConfirmContactDetails.confirmTitle(contactMethod)
    await ConfirmContactDetails.itsCorrect()
  }
)

defineStep('I am on the confirm contact details page and it asks me to confirm my details and I click correct', async () => {
  await ConfirmContactDetails.checkUrl()
  await ConfirmContactDetails.itsCorrect()
})
