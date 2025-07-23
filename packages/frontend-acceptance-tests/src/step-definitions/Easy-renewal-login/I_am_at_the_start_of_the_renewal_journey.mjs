'use strict'

import { defineStep } from '@cucumber/cucumber'
import { createPermission } from '../../lib/createPermissions.mjs'
import { adjustDate } from '../../lib/date-utils.mjs'
import RenewalsPage from '../../pages/renew-login.js'

const renew = async (
  licenceTypeInput,
  expiryExpired,
  expiryDays,
  birthdayDays,
  birthdayUnderOver,
  age,
  firstName,
  lastName,
  postalFulfilmentInput
) => {
  const dob = adjustDate('over', birthdayUnderOver, birthdayDays, age)

  const expiryDateInput = adjustDate('expired', expiryExpired, expiryDays)

  const postalFulfilment = postalFulfilmentInput === 'true'

  const permission = await createPermission(expiryDateInput, licenceTypeInput, dob, firstName, lastName, postalFulfilment)
  const referenceNumber = permission.licence.referenceNumber
  const lastSixDigits = referenceNumber.substr(referenceNumber.length - 6)

  await browser.url(`/renew/${lastSixDigits}`)

  await RenewalsPage.checkUrl()
  await RenewalsPage.setRenewalDobDate(dob.date(), dob.month() + 1, dob.year())
}

defineStep(
  /^I am at the start of the renewal journey with a "(.*)" licence, that (expires|expired) in (\d+) days and I am (\d+) days? (under|over) my (\d+)[a-z]{2} birthday and my name is "(.*)" "(.*)"$/,
  (licenceTypeInput, expiryExpired, expiryDays, birthdayDays, birthdayUnderOver, age, firstName, lastName) => {
    return renew(licenceTypeInput, expiryExpired, expiryDays, birthdayDays, birthdayUnderOver, age, firstName, lastName, false)
  }
)

defineStep(
  /^I am at the start of the renewal journey with a "(.*)" licence, that (expires|expired) in (\d+) days and I am (\d+) days? (under|over) my (\d+)[a-z]{2} birthday and my name is "(.*)" "(.*)" and postal fulfilment is (true|false)$/,
  renew
)
