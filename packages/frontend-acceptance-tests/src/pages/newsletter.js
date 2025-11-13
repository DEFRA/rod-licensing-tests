'use strict'

import Page from './page.js'
import { info } from '../lib/logger-utils.js'

class NewsletterPage extends Page {
  async setNewsletterYes (setEmailAddress) {
    const emailInput = await $('#email').isExisting()

    // const emailEnabled = !emailField.hasAttribute('hidden')
    info(`newsletter email is enabled: ${emailInput}`)

    await $('label[for="newsletter"]').click()
    //  $('#email').waitForDisplayed(10000)
    if (!emailInput) {
      info(`email address already supplied`)
    } else await $('#email').setValue(setEmailAddress)
    info(`set newsletter email to: ${setEmailAddress}`)
  }

  async setNewsletterNo () {
    await $('label[for="newsletter-2"]').click()
  }
}

export default new NewsletterPage('/buy/newsletter')
