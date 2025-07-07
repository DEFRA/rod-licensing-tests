'use strict'

import { defineStep } from '@cucumber/cucumber'
import ConfirmationMethod from '../../pages/confirmation-method'

defineStep('I am on the confirmation method page and I click continue', async () => {
  await ConfirmationMethod.continue()
})
