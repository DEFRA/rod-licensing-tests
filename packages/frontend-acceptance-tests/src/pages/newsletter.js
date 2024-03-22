'use strict'

const { logger } = require('defra-logging-facade')
const Page = require('./page')

class NewsletterPage extends Page {
  async setNewsletterYes (setEmailAddress) {
    const emailInput = await $('#email').isExisting()

    // const emailEnabled = !emailField.hasAttribute('hidden')
    logger.info(`newsletter email is enabled: ${emailInput}`)

    await $('label[for="newsletter"]').click()
    //  $('#email').waitForDisplayed(10000)
    if (!emailInput) {
      logger.info(`email address already supplied`)
    } else await $('#email').setValue(setEmailAddress)
    logger.info(`set newsletter email to: ${setEmailAddress}`)
  }

  async setNewsletterNo () {
    await $('label[for="newsletter-2"]').click()
  }
}
module.exports = new NewsletterPage('/buy/newsletter')
