const { defineStep } = require("@cucumber/cucumber")
const DobPage = require('../../pages/set-dob')

defineStep(/^I enter "(.*)" "(.*)" "(.*)" as an invalid date of birth$/, function (setdobDay, setdobMonth, setdobYear) {
  DobPage.setDobDate(setdobDay, setdobMonth, setdobYear)
  DobPage.continue()
})

defineStep(/^I enter "(\d{2}\/\d{2}\/\d{4})" as the date of birth$/, function (dob) {
  const dobParts = dob.split('/')
  DobPage.checkUrl()
  DobPage.setDobDate(dobParts[0], dobParts[1], dobParts[2])
  DobPage.continue()
})
