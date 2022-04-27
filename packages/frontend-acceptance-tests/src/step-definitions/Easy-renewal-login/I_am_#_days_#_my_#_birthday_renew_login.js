const { defineStep } = require("@cucumber/cucumber")
const moment = require('moment')
const RenewalsPage = require('../../pages/renew-login')

defineStep(/^I am (\d+) days? (under|over) my (\d+)[a-z]{2} birthday for renewal$/, function (adjustment, adjustmentType, age) {
  const mod = adjustmentType === 'over' ? -1 : 1
  const adjust = adjustment * mod

  const dob = moment()
    .subtract(age, 'years')
    .add(adjust, 'days')

  RenewalsPage.checkUrl()
  RenewalsPage.setRenewalDobDate(dob.date(), dob.month() + 1, dob.year())
})

defineStep(/^I enter "(.*)" "(.*)" "(.*)" as renewal date of birth$/, function (setDobDay, setDobMonth, setDobYear) {
  RenewalsPage.checkUrl()
  RenewalsPage.setRenewalDobDate(setDobDay, setDobMonth, setDobYear)
})
