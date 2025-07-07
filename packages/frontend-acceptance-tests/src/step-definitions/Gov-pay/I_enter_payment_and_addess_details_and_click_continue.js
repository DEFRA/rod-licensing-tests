'use strict'

import { defineStep } from '@cucumber/cucumber'
import GovPayPage from '../../pages/gov-pay'
import moment from 'moment'

defineStep('I enter payment and address details', async () => {
  const futureYear = moment()
    .add(1, 'Y')
    .format('YYYY')

  await GovPayPage.setCardNumber('4444333322221111')
  await GovPayPage.setCardExpiryMonth('01')
  await GovPayPage.setCardExpiryYear(futureYear)
  await GovPayPage.setCardHolderName('Cardholder Name')
  await GovPayPage.setCvc('555')
  await GovPayPage.setAddressLine1('Horizon House')
  await GovPayPage.setAddressCity('Bristol')
  await GovPayPage.setAddressPostcode('BS1 5AH')
  await GovPayPage.continue()
})
