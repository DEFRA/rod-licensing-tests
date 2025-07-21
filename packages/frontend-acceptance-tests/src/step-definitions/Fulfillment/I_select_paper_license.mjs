'use strict'

import { defineStep } from '@cucumber/cucumber'
import Fulfilment from '../../pages/fulfilment.js'

defineStep('I select paper license', async () => {
  await Fulfilment.checkUrl()
  await Fulfilment.selectPaperLicense()
  await Fulfilment.continue()
})
