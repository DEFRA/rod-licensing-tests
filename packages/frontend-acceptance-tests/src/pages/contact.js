'use strict'

const assert = require('assert')
const { logger } = require('defra-logging-facade')
const Page = require('./page')

class ContactPage extends Page {
  setContact (setEmailAddress, setMobileNumber) {

    if (setEmailAddress) {
      $('#how-contacted').click()
      $('#email').setValue(setEmailAddress)
      logger.info(`set contact details to: ${setEmailAddress}`)
    } else {
      $('#how-contacted-2').click()
      $('#text').setValue(setMobileNumber)
      logger.info(`set contact details to: ${setMobileNumber}`)
    }
  }
  setNoContact () {
    $('#how-contacted-3').click()
    logger.info(`No contact details available`)
  }
}
module.exports = new ContactPage('/buy/contact')
