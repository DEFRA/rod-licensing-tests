'use strict'

const { defineStep } = require('@cucumber/cucumber')
const JuniorPage = require('../../pages/junior-auto-upgrade')

defineStep('I am on the junior page and I click continue', async () => {
  await JuniorPage.checkJuniorUpgrade()
  await JuniorPage.continue()
})
