import { defineStep } from '@cucumber/cucumber'
import LicenceForPage from '../../pages/licence-for'

defineStep(/^I am buying a licence for (myself|someone else)$/, async licenceForInput => {
  await LicenceForPage.checkUrl()
  await LicenceForPage.setLicenceFor(licenceForInput)
  await LicenceForPage.continue()
})

defineStep('I am on the licence for page and I click continue', async () => {
  await LicenceForPage.continue()
})
