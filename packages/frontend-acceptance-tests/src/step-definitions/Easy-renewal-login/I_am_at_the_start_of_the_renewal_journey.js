'use strict'
const { defineStep } = require('cucumber')

const { createPermission } = require('../../lib/createPermissions')
const RenewalsPage = require('../../pages/renew-login')

defineStep(/^I am at the start of the renewal journey with a licence that expired yesterday$/, function () {
  browser.call(async () => {
    const permission = await createPermission()
    const referenceNumber = permission.licence.referenceNumber
    const lastSixDigits = referenceNumber.substr(referenceNumber.length - 6)

    await browser.url('/')
    return await browser.url(`/renew/${lastSixDigits}`)
  })

  RenewalsPage.checkUrl()
})
