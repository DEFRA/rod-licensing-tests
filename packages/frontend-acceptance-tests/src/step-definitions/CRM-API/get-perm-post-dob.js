'use strict'
const { defineStep } = require('cucumber')
const CRMNotifyRequest = require('../../pages/crm_api_notify')

defineStep(/^I send an API request to check notify status$/, { timeout: 2000000 }, async function () {
  await CRMNotifyRequest.requestCheckStatus()
})
