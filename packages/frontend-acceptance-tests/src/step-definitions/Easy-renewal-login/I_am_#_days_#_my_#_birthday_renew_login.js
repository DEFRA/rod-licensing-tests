'use strict'

import { defineStep } from '@cucumber/cucumber'
import moment from 'moment'
import RenewalsPage from '../../pages/renew-login'

defineStep(/^I am (\d+) days? (under|over) my (\d+)[a-z]{2} birthday for renewal$/, async (adjustment, adjustmentType, age) => {
  const mod = adjustmentType === 'over' ? -1 : 1
  const adjust = adjustment * mod

  const dob = moment()
    .subtract(age, 'years')
    .add(adjust, 'days')

  await RenewalsPage.checkUrl()
  await RenewalsPage.setRenewalDobDate(dob.date(), dob.month() + 1, dob.year())
})

defineStep(/^I enter "(.*)" "(.*)" "(.*)" as renewal date of birth$/, async (setDobDay, setDobMonth, setDobYear) => {
  await RenewalsPage.checkUrl()
  await RenewalsPage.setRenewalDobDate(setDobDay, setDobMonth, setDobYear)
})
