'use strict'
const { defineStep } = require('cucumber')
const CRMNotifyRequest = require('../../pages/crm_api_notify')

defineStep(/^I send an API request to check notify status$/, { timeout: 2000000 }, async function () {
  // generate token
  // await RcrRequest.getToken()
  // use async with await for all step definitions , assertions, page objects to avoid any timeouts or obj not found conditon due to time out
  await CRMNotifyRequest.requestCheckStatus()
})
