'use strict'

const { defineStep } = require("@cucumber/cucumber")
const NewsletterNoPage = require('../../pages/newsletter')

defineStep('I do not want a newsletter', function () {
  NewsletterNoPage.checkUrl()
  NewsletterNoPage.setNewsletterNo()
  NewsletterNoPage.continue()
})
