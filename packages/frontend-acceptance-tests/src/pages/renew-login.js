'use strict'

const Page = require('./page')
const { logger } = require('defra-logging-facade')

class RenewLoginPage extends Page {
  setRenewalReference (setReference) {
    $('#ref').setValue(setReference)
    logger.info(`Licence reference set as: ${setReference}`)
  }

  setRenewalDobDate (setDobDay, setDobMonth, setDobYear) {
    $('#date-of-birth-day').setValue(setDobDay)
    $('#date-of-birth-month').setValue(setDobMonth)
    $('#date-of-birth-year').setValue(setDobYear)
    logger.info(`Date of Birth set as: ${setDobDay}/${setDobMonth}/${setDobYear}`)
  }

  setRenewalPostcode (setPostcode) {
    $('#postcode').setValue(setPostcode)
    logger.info(`Postcode set as: ${setPostcode}`)
  }
}

module.exports = new RenewLoginPage('/buy/renew/identify')
