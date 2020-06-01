const { defineStep } = require('cucumber')
const DobPage = require('../../pages/set-dob')
const moment = require('moment')

defineStep(/^I am (\d+) days? (under|over) my (\d+)[a-z]{2} birthday$/, function (adjustment, adjustmentType, age) {
  const mod = adjustmentType === 'over' ? -1 : 1
  const adjust = adjustment * mod

  const dob = moment()
    .subtract(age, 'years')
    .add(adjust, 'days')

  DobPage.checkUrl()
  DobPage.setdobDate(dob.date(), dob.month() + 1, dob.year())
  //Set expectUrlChange to true if you expect the URL to change.
  DobPage.continue()
})

defineStep(/^I enter "(\d{2}\/\d{2}\/\d{4})" as the date of birth$/, function (dob) {
  const dobParts = dob.split('/')
  DobPage.checkUrl()
  DobPage.setdobDate(dobParts[0], dobParts[1], dobParts[2])
  //Set expectUrlChange to true if you expect the URL to change.
  DobPage.continue()
})
