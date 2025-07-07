'use strict'

import { defineStep } from '@cucumber/cucumber'
import ConfirmationMethod from '../../pages/confirmation-method'

defineStep('I click mobile radio button and click continue on confirmation method page', async () => {
  await ConfirmationMethod.checkUrl()
  await ConfirmationMethod.selectConfirmationMethodMobile()
  await ConfirmationMethod.continue()
})
