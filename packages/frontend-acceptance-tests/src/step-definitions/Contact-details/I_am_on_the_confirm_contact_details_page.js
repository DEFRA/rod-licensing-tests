'use strict'

const { defineStep } = require('cucumber')
const ConfirmContactDetails = require('../../pages/confirm-contact-details')

defineStep(
  /^I am on the confirm contact details page and it asks me to confirm my (email address|phone number) and I click correct$/,
  function (contactMethod) {
    ConfirmContactDetails.checkUrl()
    ConfirmContactDetails.confirmTitle(contactMethod)
    ConfirmContactDetails.itsCorrect()
  }
)

defineStep('I am on the confirm contact details page and it asks me to confirm my details and I click correct', function () {
  ConfirmContactDetails.checkUrl()
  ConfirmContactDetails.itsCorrect()
})
