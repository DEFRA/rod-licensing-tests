const { defineStep } = require('cucumber')
const moment = require('moment')

defineStep(/^I am (\d+) days? (under|over) my (\d+)[a-z]{2} birthday for renewal$/, function (adjustment, adjustmentType, age) {
  const mod = adjustmentType === 'over' ? -1 : 1
  const adjust = adjustment * mod

  const dob = moment()
    .subtract(age, 'years')
    .add(adjust, 'days')

  $.renewal.checkUrl()
  $.renewal.setRenewalDobDate(dob.date(), dob.month() + 1, dob.year())
})

defineStep(/^I enter "(\d{2}\/\d{2}\/\d{4})" as the date of birth$/, function (dob) {
  const dobParts = dob.split('/')
  $.renewal.checkUrl()
  $.renewal.setRenewalDobDate(dobParts[0], dobParts[1], dobParts[2])
  $.renewal.continue()
})
defineStep(/^I enter "(.*)" "(.*)" "(.*)" as renewal date of birth$/, function (setDobDay, setDobMonth, setDobYear) {
  $.renewal.checkUrl()
  $.renewal.setRenewalDobDate(setDobDay, setDobMonth, setDobYear)
})
