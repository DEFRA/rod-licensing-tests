'use strict'

import { logger } from 'defra-logging-facade'
import Page from './page.js'

class ContactPage extends Page {
  async setContact (setEmailAddress, setMobileNumber) {
    const emailInput = await $('#email').isExisting()
    if (setEmailAddress && emailInput) {
      await $('label[for="how-contacted"]').click()
      await $('#email').setValue(setEmailAddress)
      logger.info(`set contact details to: ${setEmailAddress}`)
    } else if (setEmailAddress && !emailInput) {
      await $('#change-email').click()
      await $('#email').setValue(setEmailAddress)
      logger.info(`change contact details to: ${setEmailAddress}`)
    } else {
      await $('label[for="how-contacted-2"]').click()
      await $('#text').setValue(setMobileNumber)
      logger.info(`set contact details to: ${setMobileNumber}`)
    }
  }

  async selectContactEmail () {
    await $('label[for="how-contacted"]').click()
    logger.info(`Email selected, no value added`)
  }

  async selectContactMobile () {
    await $('label[for="how-contacted-2"]').click()
    logger.info(`Mobile selected, no value added`)
  }

  async setNoContact () {
    await $('label[for="how-contacted-3"]').click()
    logger.info(`No contact details available`)
  }
}

export default new ContactPage('/buy/contact')
