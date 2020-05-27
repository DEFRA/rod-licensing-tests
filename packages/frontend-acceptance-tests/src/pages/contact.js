'use strict'

const assert = require('assert')
const {logger} = require('defra-logging-facade')
const Page = require('./page')

class ContactPage extends Page {
  setContact(setEmailAddress, setMobileNumber) {
    const hasContact = (setEmailAddress !== null && setMobileNumber !== null);

    if (hasContact) {
      $('label[for=contactMe]').click()
      $('#email').setValue(setEmailAddress)
      $('#mobile').setValue(setMobileNumber)
      logger.info(`set contact details to: ${setEmailAddress} & ${setMobileNumber}`)
    } else {
      $('label[for=doNotContactMe]').click()
      logger.info(`No contact details available`)
    }

  }
  setNoContact(){
    $('label[for=doNotContactMe]').click()
    logger.info(`No contact details available`)
  }
}
module.exports = new ContactPage('/buy/contact')
