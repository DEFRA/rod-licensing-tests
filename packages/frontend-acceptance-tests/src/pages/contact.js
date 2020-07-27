'use strict'

const { logger } = require('defra-logging-facade')
const Page = require('./page')

class ContactPage extends Page {
  setContact (setEmailAddress, setMobileNumber) {
    const emailInput = $('#email').isExisting()
    if (setEmailAddress && emailInput) {
      $('#how-contacted').click()
      $('#email').setValue(setEmailAddress)
      logger.info(`set contact details to: ${setEmailAddress}`)
    } else if (setEmailAddress && !emailInput) {
      $('#change-email').click()
      $('#email').setValue(setEmailAddress)
      logger.info(`change contact details to: ${setEmailAddress}`)
    } else {
      $('#how-contacted-2').click()
      $('#text').setValue(setMobileNumber)
      logger.info(`set contact details to: ${setMobileNumber}`)
    }
  }

  selectContactEmail () {
    $('#how-contacted').click()
    logger.info(`Email selected, no value added`)
  }

  selectContactMobile () {
    $('#how-contacted-2').click()
    logger.info(`Mobile selected, no value added`)
  }

  setNoContact () {
    $('#how-contacted-3').click()
    logger.info(`No contact details available`)
  }
}
module.exports = new ContactPage('/buy/contact')
