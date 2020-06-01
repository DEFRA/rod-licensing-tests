'use strict'

const { defineStep } = require('cucumber')
const { core } = require('defra-wdio-core')
const NewsletterNoPage = require('../../pages/newsletter')

defineStep('I do not want a newsletter', function () {
  NewsletterNoPage.checkUrl()
  NewsletterNoPage.setNewsletterNo()
  NewsletterNoPage.click('button', 'Continue', true)
})
