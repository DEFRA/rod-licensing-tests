'use strict'
const { defineStep } = require("@cucumber/cucumber")

const { createPermission } = require('../../lib/createPermissions')
const { adjustDate } = require('../../lib/date-utils')
const RenewalsPage = require('../../pages/renew-login')

defineStep(
  /^I am at the start of the renewal journey with a "(.*)" licence, that (expires|expired) in (\d+) days and I am (\d+) days? (under|over) my (\d+)[a-z]{2} birthday and my name is "(.*)" "(.*)"$/,
  function (licenceTypeInput, expiryExpired, expiryDays, birthdayDays, birthdayUnderOver, age, firstName, lastName) {
    renew(licenceTypeInput, expiryExpired, expiryDays, birthdayDays, birthdayUnderOver, age, firstName, lastName, false)
  }
)

defineStep(
  /^I am at the start of the renewal journey with a "(.*)" licence, that (expires|expired) in (\d+) days and I am (\d+) days? (under|over) my (\d+)[a-z]{2} birthday and my name is "(.*)" "(.*)" and postal fulfilment is (true|false)$/,
  renew
)

function renew (
  licenceTypeInput,
  expiryExpired,
  expiryDays,
  birthdayDays,
  birthdayUnderOver,
  age,
  firstName,
  lastName,
  postalFulfilmentInput
) {
  const dob = adjustDate('over', birthdayUnderOver, birthdayDays, age)

  browser.call(async () => {
    const expiryDateInput = adjustDate('expired', expiryExpired, expiryDays)

    const postalFulfilment = postalFulfilmentInput === 'true'

    const permission = await createPermission(expiryDateInput, licenceTypeInput, dob, firstName, lastName, postalFulfilment)
    const referenceNumber = permission.licence.referenceNumber
    const lastSixDigits = referenceNumber.substr(referenceNumber.length - 6)

    return await browser.url(`/renew/${lastSixDigits}`)
  })

  RenewalsPage.checkUrl()
  RenewalsPage.setRenewalDobDate(dob.date(), dob.month() + 1, dob.year())
}
