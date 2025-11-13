'use strict'

import Page from './page.js'
const logger = require('../lib/logger-utils.js')

class ContactPage extends Page {
  async setContact (setEmailAddress, setMobileNumber) {
    const emailInput = await $('#email').isExisting()
    if (setEmailAddress && emailInput) {
      await $('label[for="how-contacted"]').click()
      await $('#email').setValue(setEmailAddress)
      info(`set contact details to: ${setEmailAddress}`)
    } else if (setEmailAddress && !emailInput) {
      await $('#change-email').click()
      await $('#email').setValue(setEmailAddress)
      info(`change contact details to: ${setEmailAddress}`)
    } else {
      await $('label[for="how-contacted-2"]').click()
      await $('#text').setValue(setMobileNumber)
      info(`set contact details to: ${setMobileNumber}`)
    }
  }

  async selectContactEmail () {
    await $('label[for="how-contacted"]').click()
    info(`Email selected, no value added`)
  }

  async selectContactMobile () {
    await $('label[for="how-contacted-2"]').click()
    info(`Mobile selected, no value added`)
  }

  async setNoContact () {
    await $('label[for="how-contacted-3"]').click()
    info(`No contact details available`)
  }
}

export default new ContactPage('/buy/contact')
