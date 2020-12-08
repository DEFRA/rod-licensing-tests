const { defineStep } = require('cucumber')
const RenewalsPage = require('../../pages/renew-login')
const createPermission = require('../../lib/createPermissions')

defineStep('I complete the easy renewals login', async function () {
  const permission = await createPermission()
  const dob = new Date(permission.licensee.birthDate)
  RenewalsPage.checkUrl()
  RenewalsPage.setRenewalDobDate(dob.date(), dob.month() + 1, dob.year())
  RenewalsPage.setRenewalReference(permission.referenceNumber.split()[2])
  RenewalsPage.setRenewalPostcode(permission.licensee.postcode)
  RenewalsPage.continue()
})
