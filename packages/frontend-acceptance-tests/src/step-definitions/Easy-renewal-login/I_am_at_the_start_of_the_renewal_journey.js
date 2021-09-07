'use strict'
const { defineStep } = require('cucumber')
const moment = require('moment')

const { createPermission } = require('../../lib/createPermissions')
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
  const birthdayMod = birthdayUnderOver === 'over' ? -1 : 1
  const birthdayAdjust = birthdayDays * birthdayMod
  const dob = moment()
    .subtract(age, 'years')
    .add(birthdayAdjust, 'days')

  browser.call(async () => {
    const expiredMod = expiryExpired === 'expired' ? -1 : 1
    const adjustExpiry = expiryDays * expiredMod
    const expiryDateInput = moment().add(adjustExpiry, 'days')

    const postalFulfilment = postalFulfilmentInput === 'true'

    const permission = await createPermission(expiryDateInput, licenceTypeInput, dob, firstName, lastName, postalFulfilment)
    const referenceNumber = permission.licence.referenceNumber
    const lastSixDigits = referenceNumber.substr(referenceNumber.length - 6)

    return await browser.url(`/renew/${lastSixDigits}`)
  })

  RenewalsPage.checkUrl()
  RenewalsPage.setRenewalDobDate(dob.date(), dob.month() + 1, dob.year())
}
