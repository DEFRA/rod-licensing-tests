'use strict'

const { defineStep } = require('cucumber')
const { core } = require('defra-wdio-core')
const NewsletterPage = require('../../pages/newsletter')

defineStep(/^I receive a newsletter and enter "(.*)"$/, function(setEmailAddress){
  NewsletterPage.checkUrl()
  NewsletterPage.setNewsletterYes(setEmailAddress)
  NewsletterPage.click('button','Continue',true)
})


defineStep(/^I receive a newsletter and enter no email "(.*)"$/, function(setEmailAddress){
  NewsletterPage.checkUrl()
  NewsletterPage.setNewsletterYes(setEmailAddress)
  NewsletterPage.continue()
})
