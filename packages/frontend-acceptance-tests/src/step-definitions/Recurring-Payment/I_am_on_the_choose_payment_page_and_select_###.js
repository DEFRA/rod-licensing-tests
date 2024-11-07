'use strict'

const { defineStep } = require('@cucumber/cucumber')
const ChoosePaymentPage = require('../../pages/choose-payment')
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
