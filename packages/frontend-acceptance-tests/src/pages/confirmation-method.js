'use strict'

const { logger } = require('defra-logging-facade')
const Page = require('./page')

class ConfirmationMethodPage extends Page {
  setConfirmationMethod (setEmailAddress, setMobileNumber) {
    const emailInput = $('#email').isExisting()
    if (setEmailAddress && emailInput) {
      $('#licence-confirmation-method').click()
      $('#email').setValue(setEmailAddress)
      logger.info(`set confirmation method to: ${setEmailAddress}`)
    } else if (setEmailAddress && !emailInput) {
      $('#change-email').click()
      $('#email').setValue(setEmailAddress)
      logger.info(`change set confirmation method to: ${setEmailAddress}`)
    } else {
      $('#licence-confirmation-method-2').click()
      $('#text').setValue(setMobileNumber)
      logger.info(`set confirmation method to: ${setMobileNumber}`)
    }
  }

  selectConfirmationMethodEmail () {
    $('#licence-confirmation-method').click()
    logger.info(`Email selected, no value added`)
  }

  selectConfirmationMethodMobile () {
    $('#licence-confirmation-method-2').click()
    logger.info(`Mobile selected, no value added`)
  }

  selectConfirmationMethodMakeNote () {
    $('#licence-confirmation-method-3').click()
    logger.info(`Make a note, no value added`)
  }
}
module.exports = new ConfirmationMethodPage('/buy/confirmation-method')
