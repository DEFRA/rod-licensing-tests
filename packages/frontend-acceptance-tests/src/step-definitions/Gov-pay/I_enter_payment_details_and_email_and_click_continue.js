'use strict'

import { defineStep } from '@cucumber/cucumber'
import GovPayPage from '../../pages/gov-pay.js'
import moment from 'moment'

defineStep('I enter payment details and email', async () => {
  const futureYear = moment()
    .add(1, 'Y')
    .format('YYYY')

  await GovPayPage.setCardNumber('4444333322221111')
  await GovPayPage.setCardExpiryMonth('01')
  await GovPayPage.setCardExpiryYear(futureYear)
  
  // Recurring payments form requires additional fields
  if (await $('#cardholder-name').isExisting()) {
    await GovPayPage.setCardHolderName('Cardholder Name')
  }
  
  await GovPayPage.setCvc('555')
  
  if (await $('#address-line-1').isExisting()) {
    await GovPayPage.setAddressLine1('Horizon House')
  }
  if (await $('#address-city').isExisting()) {
    await GovPayPage.setAddressCity('Bristol')
  }
  if (await $('#address-postcode').isExisting()) {
    await GovPayPage.setAddressPostcode('BS1 5AH')
  }
  
  await GovPayPage.setEmail('test@example.com')
  await GovPayPage.continue()
})
