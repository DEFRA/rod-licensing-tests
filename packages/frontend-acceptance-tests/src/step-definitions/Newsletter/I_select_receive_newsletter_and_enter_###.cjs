'use strict'

const { defineStep } = require('cucumber')
const NewsletterPage = require('../../pages/newsletter')

defineStep(/^I receive a newsletter and enter "(.*)"$/, function (setEmailAddress) {
  NewsletterPage.checkUrl()
  NewsletterPage.setNewsletterYes(setEmailAddress)
  NewsletterPage.continue()
})

defineStep(/^I receive a newsletter and enter no email "(.*)"$/, function (setEmailAddress) {
  NewsletterPage.checkUrl()
  NewsletterPage.setNewsletterYes(setEmailAddress)
  NewsletterPage.continue()
})
