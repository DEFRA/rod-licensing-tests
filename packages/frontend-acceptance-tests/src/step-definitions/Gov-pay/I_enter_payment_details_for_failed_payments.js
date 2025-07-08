'use strict'

import { defineStep } from '@cucumber/cucumber'
import GovPayPage from '../../pages/gov-pay.js'
import moment from 'moment'

defineStep(/^I enter payment details as "(.*)"$/, async cardNo => {
  const futureYear = moment()
    .add(1, 'Y')
    .format('YYYY')

  await GovPayPage.setCardNumber(cardNo)
  await GovPayPage.setCardExpiryMonth('01')
  await GovPayPage.setCardExpiryYear(futureYear)
  await GovPayPage.setCvc('555')
  await GovPayPage.continue()
})
