'use strict'

import Page from './page.js'
import logger from'../lib/logger-utils.js'

class ConfirmationMethodPage extends Page {
  async setConfirmationMethod (setEmailAddress, setMobileNumber) {
    const emailInput = await $('#email').isExisting()
    if (setEmailAddress && emailInput) {
      await $('label[for="licence-confirmation-method"]').click()
      await $('#email').setValue(setEmailAddress)
      logger.info(`set confirmation method to: ${setEmailAddress}`)
    } else if (setEmailAddress && !emailInput) {
      await $('#change-email').click()
      await $('#email').setValue(setEmailAddress)
      logger.info(`change set confirmation method to: ${setEmailAddress}`)
    } else {
      await $('label[for="licence-confirmation-method-2"]').click()
      await $('#text').setValue(setMobileNumber)
      logger.info(`set confirmation method to: ${setMobileNumber}`)
    }
  }

  async selectConfirmationMethodEmail () {
    await $('label[for="licence-confirmation-method"]').click()
    logger.info(`Email selected, no value added`)
  }

  async selectConfirmationMethodMobile () {
    await $('label[for="licence-confirmation-method-2"]').click()
    logger.info(`Mobile selected, no value added`)
  }

  async selectConfirmationMethodMakeNote () {
    await $('label[for="licence-confirmation-method-3"]').click()
    logger.info(`Make a note, no value added`)
  }
}

export default new ConfirmationMethodPage('/buy/confirmation-method')
