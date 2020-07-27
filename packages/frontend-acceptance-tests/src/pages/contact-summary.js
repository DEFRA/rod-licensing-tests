'use strict'

const Page = require('./page')
const { logger } = require('defra-logging-facade')

class ContactSummmaryPage extends Page {
  nameChange () {
    const nameChanges = $('#change-name')
    nameChanges.waitForDisplayed(1000)
    logger.info(`On the contact summary page`)
    nameChanges.click()
    logger.info(`On the Name page`)
  }

  emailChange () {
    const changeEmailContact = $('#add-contact').isExisting()
    if (!changeEmailContact) {
      const emailChanges = $('#change-how-contacted')
      emailChanges.waitForDisplayed(1000)
      logger.info(`On the contact summary page`)
      emailChanges.click()
      logger.info(`On the Contact page`)
    } else {
      changeEmailContact.waitForDisplayed(1000)
      logger.info(`On the contact summary page`)
      changeEmailContact.click()
      logger.info(`On the Contact page`)
    }
  }

  addressChange () {
    const addressChanges = $('#change-address')
    addressChanges.waitForDisplayed(1000)
    logger.info(`On the contact summary page`)
    addressChanges.click()
    logger.info(`On the Address page`)
  }

  newsletterChange () {
    const newsChanges = $('#change-newsletter')
    newsChanges.waitForDisplayed(1000)
    logger.info(`On the contact summary page`)
    newsChanges.click()
    logger.info(`On the Address page`)
  }
}
module.exports = new ContactSummmaryPage('/buy/contact-summary')
