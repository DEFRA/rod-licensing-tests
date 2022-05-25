'use strict'

const Page = require('./page')
const { logger } = require('defra-logging-facade')

class DobPage extends Page {
  // Set the value of the radio button to 'yes' or 'no' depending on the data file value
  async setDobDate (setdobDay, setdobMonth, setdobYear) {
    await $('#date-of-birth-day').setValue(setdobDay)
    await $('#date-of-birth-month').setValue(setdobMonth)
    await $('#date-of-birth-year').setValue(setdobYear)
    logger.info(`Date of Birth set as: ${setdobDay}/${setdobMonth}/${setdobYear}`)
  }
}

module.exports = new DobPage('buy/date-of-birth')
