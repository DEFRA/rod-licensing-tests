'use strict'

const assert = require('assert')
const moment = require('moment')
const Page = require('./page')
const { logger } = require('defra-logging-facade')

class StartWhenPage extends Page {
  // Set the start date to 2 days from today's date
  twoDaysFromToday () {
    const now = moment()
    const twoDaysFromToday = now.add(2, 'days')
    const day = moment(twoDaysFromToday).date()
    const month = moment(twoDaysFromToday).month() + 1
    const year = moment(twoDaysFromToday).year()
    $('#licence-start-date-day').setValue(day)
    $('#licence-start-date-month').setValue(month)
    $('#licence-start-date-year').setValue(year)
  }

  subtractTwoDaysFromToday () {
    const now = moment()
    const subtractTwoDaysFromToday = now.subtract(2, 'days')
    const day = moment(subtractTwoDaysFromToday).date()
    const month = moment(subtractTwoDaysFromToday).month()
    const year = moment(subtractTwoDaysFromToday).year()
    $('#licence-start-date-day').setValue(day)
    $('#licence-start-date-month').setValue(month)
    $('#licence-start-date-year').setValue(year)
  }
}
module.exports = new StartWhenPage('/buy/start-date')
