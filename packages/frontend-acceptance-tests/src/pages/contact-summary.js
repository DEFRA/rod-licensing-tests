'use strict'

import Page from './page.js'
import { info } from '../lib/logger-utils.js'

class ContactSummmaryPage extends Page {
  async nameChange () {
    const nameChanges = $('#change-name')
    await nameChanges.waitForDisplayed(1000)
    info(`On the contact summary page`)
    await nameChanges.click()
    info(`On the Name page`)
  }

  async emailChange () {
    const changeEmailContact = await $('#add-contact').isExisting()
    if (!changeEmailContact) {
      const emailChanges = $('#change-how-contacted')
      await emailChanges.waitForDisplayed(1000)
      info(`On the contact summary page`)
      await emailChanges.click()
      info(`On the Contact page`)
    } else {
      await changeEmailContact.waitForDisplayed(1000)
      info(`On the contact summary page`)
      await changeEmailContact.click()
      info(`On the Contact page`)
    }
  }

  async addressChange () {
    const addressChanges = $('#change-address')
    await addressChanges.waitForDisplayed(1000)
    info(`On the contact summary page`)
    await addressChanges.click()
    info(`On the Address page`)
  }

  async newsletterChange () {
    const newsChanges = $('#change-newsletter')
    await newsChanges.waitForDisplayed(1000)
    info(`On the contact summary page`)
    await newsChanges.click()
    info(`On the Address page`)
  }
}

export default new ContactSummmaryPage('/buy/contact-summary')
