'use strict'

import Page from './page.js'
import { logger } from 'defra-logging-facade.js'

class RenewLoginPage extends Page {
  // Set the value of the radio button to 'yes' or 'no' depending on the data file value
  async setRenewalDobDate (setDobDay, setDobMonth, setDobYear) {
    await $('#date-of-birth-day').setValue(setDobDay)
    await $('#date-of-birth-month').setValue(setDobMonth)
    await $('#date-of-birth-year').setValue(setDobYear)
    logger.info(`Date of Birth set as: ${setDobDay}/${setDobMonth}/${setDobYear}`)
  }

  async setRenewalPostcode (setPostcode) {
    await $('#postcode').setValue(setPostcode)
    logger.info(`Postcode set as: ${setPostcode}`)
  }
}

export default new RenewLoginPage('/buy/renew/identify')
