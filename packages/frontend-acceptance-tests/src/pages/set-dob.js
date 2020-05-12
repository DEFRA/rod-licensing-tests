'use strict'

const assert = require('assert')
const Page = require('./page')
const {logger} = require('defra-logging-facade')

class DobPage extends Page {
  // Set the value of the radio button to 'yes' or 'no' depending on the data file value
  setdobDate(setdobDay, setdobMonth, setdobYear) {
    $('#date-of-birth-day').setValue(setdobDay)
    $('#date-of-birth-month').setValue(setdobMonth)
    $('#date-of-birth-year').setValue(setdobYear)
    logger.info(`Date of Birth set as: ${setdobDay}/${setdobMonth}/${setdobYear}`)

  }
}

module.exports = new DobPage('buy/date-of-birth')
