'use strict'

const { defineStep } = require('cucumber')
const { core } = require('defra-wdio-core')
const ConcessionPage = require('../../pages/concession')

defineStep(/^I select (yes|no) for the benefits$/, function (concession) {
  ConcessionPage.checkUrl()
  ConcessionPage.setConcession(concession)
  ConcessionPage.click('button','Continue',true)
})