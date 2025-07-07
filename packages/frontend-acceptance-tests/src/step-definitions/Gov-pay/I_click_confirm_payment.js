'use strict'

import { defineStep } from '@cucumber/cucumber'
import GovPayConfirmPage from '../../pages/gov-pay-confirm'

defineStep('I confirm payment details', async () => {
  await GovPayConfirmPage.continue()
})
