'use strict'

import { defineStep } from '@cucumber/cucumber'
import ConfirmationMethod from '../../pages/confirmation-method'

defineStep('I select make a note of the license', async () => {
  await ConfirmationMethod.checkUrl()
  await ConfirmationMethod.selectConfirmationMethodMakeNote()
  await ConfirmationMethod.continue()
})
