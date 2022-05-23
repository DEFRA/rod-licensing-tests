'use strict'

const Page = require('./page')
const { logger } = require('defra-logging-facade')

class RenewLoginPage extends Page {
  // Set the value of the radio button to 'yes' or 'no' depending on the data file value
  async setRenewalDobDate(setDobDay, setDobMonth, setDobYear) {
    await $('#date-of-birth-day').setValue(setDobDay)
    await $('#date-of-birth-month').setValue(setDobMonth)
    await $('#date-of-birth-year').setValue(setDobYear)
    logger.info(`Date of Birth set as: ${setDobDay}/${setDobMonth}/${setDobYear}`)
  }

  async setRenewalPostcode(setPostcode) {
    await $('#postcode').setValue(setPostcode)
    logger.info(`Postcode set as: ${setPostcode}`)
  }
}

module.exports = new RenewLoginPage('/buy/renew/identify')
