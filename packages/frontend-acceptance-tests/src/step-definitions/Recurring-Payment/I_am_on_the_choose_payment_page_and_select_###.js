'use strict'

import { defineStep } from '@cucumber/cucumber'
import ChoosePaymentPage from '../../pages/choose-payment.js'

const recurringPayments = process.env.SHOW_RECURRING_PAYMENTS === 'true'

defineStep('I select single licence only and click continue', async () => {
    if (recurringPayments) {
        await ChoosePaymentPage.checkUrl()
        await ChoosePaymentPage.setChosenPayment('no')
        await ChoosePaymentPage.continue()
    } else {
        return
    }
})

defineStep('I select recurring payment and click continue', async () => {
    if (recurringPayments) {
        await ChoosePaymentPage.checkUrl()
        await ChoosePaymentPage.setChosenPayment('yes')
        await ChoosePaymentPage.continue()
    } else {
        return
    }
})
