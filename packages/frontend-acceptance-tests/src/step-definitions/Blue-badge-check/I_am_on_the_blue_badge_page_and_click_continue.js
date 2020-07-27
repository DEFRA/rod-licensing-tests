'use strict'

const { defineStep } = require('cucumber')
const blueBadge = require('../../pages/blue-badge')

defineStep('I am on the blue badge page and I click continue', function () {
  blueBadge.checkUrl()
  blueBadge.continue()
})
