'use strict'

import { defineStep } from '@cucumber/cucumber'
import ChoosePaymentPage from '../../pages/choose-payment.js'

defineStep('I select single licence only and click continue', async () => {
    await ChoosePaymentPage.checkUrl()
    await ChoosePaymentPage.setChosenPayment('no')
    await ChoosePaymentPage.continue()
})

defineStep('I select recurring payment and click continue', async () => {
    await ChoosePaymentPage.checkUrl()
    await ChoosePaymentPage.setChosenPayment('yes')
    await ChoosePaymentPage.continue()
})
