'use strict'

const { defineStep } = require('cucumber')
const ConcessionProof = require('../../pages/concession-proof')

defineStep(/^I enter "(.*)" as a NI number$/, function (setNiNum) {
  ConcessionProof.checkUrl()
  ConcessionProof.setNiNumber(setNiNum)
  //Set expectUrlChange to true if you expect the URL to change.
  ConcessionProof.click('button', 'Continue', true)
})
