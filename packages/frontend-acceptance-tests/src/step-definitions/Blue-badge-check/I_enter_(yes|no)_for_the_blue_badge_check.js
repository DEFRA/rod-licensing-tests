'use strict'

const { defineStep } = require('cucumber')
const BlueBadgePage = require('../../pages/blue-badge')

defineStep(/^I select (yes|no) for the blue badge$/, function (blueBadge) {
  BlueBadgePage.checkUrl()
  BlueBadgePage.setBlueBadge(blueBadge)
  BlueBadgePage.continue()
})
