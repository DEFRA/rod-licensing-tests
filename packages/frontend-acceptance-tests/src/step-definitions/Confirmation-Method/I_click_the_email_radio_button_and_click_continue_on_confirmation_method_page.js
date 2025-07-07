'use strict'

import { defineStep } from '@cucumber/cucumber'
import ConfirmationMethod from '../../pages/confirmation-method'

defineStep('I click email radio button and click continue on confirmation method page', async () => {
  await ConfirmationMethod.checkUrl()
  await ConfirmationMethod.selectConfirmationMethodEmail()
  await ConfirmationMethod.continue()
})
