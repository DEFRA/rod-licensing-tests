import { logger } from 'defra-logging-facade'
import Page from './page'

class NewsletterPage extends Page {
  setNewsletterYes (setEmailAddress) {
    const emailInput = $('#email').isExisting()

    // const emailEnabled = !emailField.hasAttribute('hidden')
    logger.info(`newsletter email is enabled: ${emailInput}`)

    $('#newsletter').click()
    //  $('#email').waitForDisplayed(10000)
    if (!emailInput) {
      logger.info('email address already supplied')
    } else $('#email').setValue(setEmailAddress)
    logger.info(`set newsletter email to: ${setEmailAddress}`)
  }

  setNewsletterNo () {
    $('#newsletter-2').click()
  }
}

export default new NewsletterPage('/buy/newsletter')
