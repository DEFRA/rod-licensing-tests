'use strict'

const { defineStep } = require('cucumber')
const ConcessionProof = require('../../pages/concession-proof')

defineStep(/^I enter "(.*)" as a NI number$/, function (setNiNum) {
  ConcessionProof.checkUrl()
  ConcessionProof.setNiNumber(setNiNum)
  ConcessionProof.continue()
})
