'use strict'

import { defineStep } from '@cucumber/cucumber'
import TermsAndConditionsPage from '../../pages/terms-and-conditions'

defineStep('I agree to the terms and conditions and click continue', async () => {
  await TermsAndConditionsPage.checkUrl()
  await TermsAndConditionsPage.setAgreeCheckbox()
  await TermsAndConditionsPage.continue()
})
