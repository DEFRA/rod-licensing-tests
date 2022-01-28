const { defineStep } = require('cucumber')
const LicenceForPage = require('../../pages/licence-for')

defineStep(/^I am buying a licence for (myself|someone else)$/, function (licenceForInput) {
  LicenceForPage.checkUrl()
  LicenceForPage.setLicenceFor(licenceForInput)
  LicenceForPage.continue()
})

defineStep('I am on the licence for page and I click continue', function () {
  LicenceForPage.continue()
})
