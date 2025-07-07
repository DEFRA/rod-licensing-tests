'use strict'

import { defineStep } from '@cucumber/cucumber'
import contactDetails from '../../pages/contact'

defineStep('I am on the contact details page and I click continue', async () => {
  await contactDetails.continue()
})
