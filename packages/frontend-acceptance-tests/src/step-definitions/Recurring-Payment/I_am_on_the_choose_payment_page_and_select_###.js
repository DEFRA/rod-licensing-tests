'use strict'

const { defineStep } = require('@cucumber/cucumber')
const ChoosePaymentPage = require('../../pages/choose-payment')

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
