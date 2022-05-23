const { defineStep } = require('@cucumber/cucumber')
const DobPage = require('../../pages/set-dob')

defineStep(/^I enter "(.*)" "(.*)" "(.*)" as an invalid date of birth$/, async (setdobDay, setdobMonth, setdobYear) => {
  await DobPage.setDobDate(setdobDay, setdobMonth, setdobYear)
  await DobPage.continue()
})

defineStep(/^I enter "(\d{2}\/\d{2}\/\d{4})" as the date of birth$/, async dob => {
  const dobParts = dob.split('/')
  await DobPage.checkUrl()
  await DobPage.setDobDate(dobParts[0], dobParts[1], dobParts[2])
  await DobPage.continue()
})
