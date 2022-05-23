'use strict'

const { logger } = require('defra-logging-facade')
const Page = require('./page')

class ContactPage extends Page {
  async setContact (setEmailAddress, setMobileNumber) {
    const emailInput = await $('#email').isExisting()
    if (setEmailAddress && emailInput) {
      await $('#how-contacted').click()
      await $('#email').setValue(setEmailAddress)
      logger.info(`set contact details to: ${setEmailAddress}`)
    } else if (setEmailAddress && !emailInput) {
      await $('#change-email').click()
      await $('#email').setValue(setEmailAddress)
      logger.info(`change contact details to: ${setEmailAddress}`)
    } else {
      await $('#how-contacted-2').click()
      await $('#text').setValue(setMobileNumber)
      logger.info(`set contact details to: ${setMobileNumber}`)
    }
  }

  async selectContactEmail () {
    await $('#how-contacted').click()
    logger.info(`Email selected, no value added`)
  }

  async selectContactMobile () {
    await $('#how-contacted-2').click()
    logger.info(`Mobile selected, no value added`)
  }

  async setNoContact () {
    await $('#how-contacted-3').click()
    logger.info(`No contact details available`)
  }
}
module.exports = new ContactPage('/buy/contact')
