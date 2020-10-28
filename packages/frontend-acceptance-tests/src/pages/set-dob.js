import Page from './page'
import { logger } from 'defra-logging-facade'

class DobPage extends Page {
  // Set the value of the radio button to 'yes' or 'no' depending on the data file value
  setDobDate (setdobDay, setdobMonth, setdobYear) {
    $('#date-of-birth-day').setValue(setdobDay)
    $('#date-of-birth-month').setValue(setdobMonth)
    $('#date-of-birth-year').setValue(setdobYear)
    logger.info(`Date of Birth set as: ${setdobDay}/${setdobMonth}/${setdobYear}`)
  }
}

export default new DobPage('buy/date-of-birth')
