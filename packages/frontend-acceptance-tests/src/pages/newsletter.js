'use strict'

const assert = require('assert')
const { logger } = require('defra-logging-facade')
const Page = require('./page')

class NewsletterPage extends Page {
  setNewsletterYes (setEmailAddress) {
    const emailInput = $('#email').isExisting()

    // const emailEnabled = !emailField.hasAttribute('hidden')
    logger.info(`newsletter email is enabled: ${emailInput}`)

    $('#newsletter').click()
    //$('#email').waitForDisplayed(10000)
    if (!emailInput) {
      logger.info(`email address already supplied`)
    } else $('#email').setValue(setEmailAddress)
    logger.info(`set newsletter email to: ${setEmailAddress}`)
  }
  setNewsletterNo () {
    $('#newsletter-2').click()
  }
}
module.exports = new NewsletterPage('/buy/newsletter')
