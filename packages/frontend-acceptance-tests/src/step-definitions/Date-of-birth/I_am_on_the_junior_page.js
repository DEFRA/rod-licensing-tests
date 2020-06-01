'use strict'

const { defineStep } = require('cucumber')
const { core } = require('defra-wdio-core')
const JuniorPage = require('../../pages/junior-auto-upgrade')

defineStep('I am on the junior page and I click continue', function () {
  JuniorPage.checkUrl()
  JuniorPage.checkJuniorUpgrade()
  JuniorPage.click('button', 'Continue', true)
})
