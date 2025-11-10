'use strict'

import Page from './page.js'
import logger from '../utils/logger.js'

class ContactSummmaryPage extends Page {
  async nameChange () {
    const nameChanges = $('#change-name')
    await nameChanges.waitForDisplayed(1000)
    logger.info(`On the contact summary page`)
    await nameChanges.click()
    logger.info(`On the Name page`)
  }

  async emailChange () {
    const changeEmailContact = await $('#add-contact').isExisting()
    if (!changeEmailContact) {
      const emailChanges = $('#change-how-contacted')
      await emailChanges.waitForDisplayed(1000)
      logger.info(`On the contact summary page`)
      await emailChanges.click()
      logger.info(`On the Contact page`)
    } else {
      await changeEmailContact.waitForDisplayed(1000)
      logger.info(`On the contact summary page`)
      await changeEmailContact.click()
      logger.info(`On the Contact page`)
    }
  }

  async addressChange () {
    const addressChanges = $('#change-address')
    await addressChanges.waitForDisplayed(1000)
    logger.info(`On the contact summary page`)
    await addressChanges.click()
    logger.info(`On the Address page`)
  }

  async newsletterChange () {
    const newsChanges = $('#change-newsletter')
    await newsChanges.waitForDisplayed(1000)
    logger.info(`On the contact summary page`)
    await newsChanges.click()
    logger.info(`On the Address page`)
  }
}

export default new ContactSummmaryPage('/buy/contact-summary')
