import Page from './page'
import { logger } from 'defra-logging-facade'

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

export default new RenewLoginPage('/buy/renew/identify')
