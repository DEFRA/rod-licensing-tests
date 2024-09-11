'use strict'

const { defineStep } = require('@cucumber/cucumber')
const ChoosePaymentPage = require('../../pages/choose-payment')

defineStep(/^I select (Yes|No) about setting up a recurring card payment and click continue$/, async (choosePaymentInput) => {
    await ChoosePaymentPage.checkUrl()
    await ChoosePaymentPage.setChosenPayment(choosePaymentInput)
    await ChoosePaymentPage.continue()

})
