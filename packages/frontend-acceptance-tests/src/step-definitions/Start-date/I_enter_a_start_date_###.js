'use strict'

const { defineStep } = require('cucumber')
const { core } = require('defra-wdio-core')
const StartDatePage = require('../../pages/start-date')

defineStep('I enter date two days from today and click continue', function (){
  StartDatePage.checkUrl()
  StartDatePage.twoDaysFromToday()
  StartDatePage.click('button','Continue',true)

})



