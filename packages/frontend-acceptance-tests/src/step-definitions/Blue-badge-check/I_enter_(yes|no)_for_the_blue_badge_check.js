'use strict'

const { defineStep } = require('cucumber')
const { core } = require('defra-wdio-core')
const BlueBadgePage = require('../../pages/blue-badge')

defineStep(/^I select (yes|no) for the blue badge$/, function (blueBadge) {
  BlueBadgePage.checkUrl()
  BlueBadgePage.setBlueBadge(blueBadge)
  BlueBadgePage.click('button', 'Continue', true)
})
