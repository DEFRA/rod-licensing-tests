const { defineStep } = require('cucumber')
const RenewalsPage = require('../../pages/renew-login')
const createPermission = require('../../lib/createPermissions')

defineStep('I have a licence that expired yesterday', async function () {
  const permission = await createPermission()
})