'use strict'

const { defineStep } = require('cucumber')
const BlueBadgeProof = require('../../pages/blue-badge-proof')

defineStep(/^I enter "(.*)" as a blue badge number$/, function (setBBNum) {
  BlueBadgeProof.checkUrl()
  BlueBadgeProof.setBBNumber(setBBNum)
  //Set expectUrlChange to true if you expect the URL to change.
  BlueBadgeProof.click('button', 'Continue', true)
})
