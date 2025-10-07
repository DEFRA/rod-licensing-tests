'use strict'

import Page from './page.js'
import { logger } from 'defra-logging-facade'

class DobPage extends Page {
  // Set the value of the radio button to 'yes' or 'no' depending on the data file value
  async setDobDate (setdobDay, setdobMonth, setdobYear) {
    await $('#date-of-birth-day').setValue(setdobDay)
    await $('#date-of-birth-month').setValue(setdobMonth)
    await $('#date-of-birth-year').setValue(setdobYear)
    logger.info(`Date of Birth set as: ${setdobDay}/${setdobMonth}/${setdobYear}`)
  }
}

export default new DobPage('buy/date-of-birth')
