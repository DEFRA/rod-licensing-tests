const { defineStep } = require('@cucumber/cucumber')
const AddLicencePage = require('../../pages/add-licence')

defineStep('I am on the add licence page and I proceed with no', async () => {
  await AddLicencePage.checkUrl()
  await AddLicencePage.setDoNotAddLicence()
  await AddLicencePage.continue()
})
