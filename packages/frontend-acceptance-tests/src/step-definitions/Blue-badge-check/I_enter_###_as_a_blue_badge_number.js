'use strict'

const { defineStep } = require('cucumber')
const BlueBadgeProof = require('../../pages/blue-badge-proof')

defineStep(/^I enter "(.*)" as a blue badge number$/, function (setBBNum) {
  BlueBadgeProof.checkUrl()
  BlueBadgeProof.setBBNumber(setBBNum)
  BlueBadgeProof.click('button', 'Continue', true)
})
