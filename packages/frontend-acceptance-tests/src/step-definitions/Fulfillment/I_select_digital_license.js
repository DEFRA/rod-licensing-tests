'use strict'

import { defineStep } from '@cucumber/cucumber'
import Fulfilment from '../../pages/fulfilment'

defineStep('I select digital license', async () => {
  await Fulfilment.checkUrl()
  await Fulfilment.selectDigitalLicense()
  await Fulfilment.continue()
})
