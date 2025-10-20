'use strict'

import { defineStep } from '@cucumber/cucumber'
import DobPage from '../../pages/set-dob.js'
import moment from 'moment'

defineStep(/^I am (\d+) days? (under|over) my (\d+)[a-z]{2} birthday$/, async (adjustment, adjustmentType, age) => {
  const mod = adjustmentType === 'over' ? -1 : 1
  const adjust = adjustment * mod

  const dob = moment()
    .subtract(age, 'years')
    .add(adjust, 'days')

  await DobPage.checkUrl()
  await DobPage.setDobDate(dob.date(), (await dob.month()) + 1, dob.year())
  await DobPage.continue()
})
