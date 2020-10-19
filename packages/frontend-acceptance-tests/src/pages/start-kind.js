'use strict'
const Page = require('./page')
const { logger } = require('defra-logging-facade')
const moment = require('moment')

class StartWhenPage extends Page {
  setStartKind (startKind) {
    switch (startKind) {
      case 'Now':
        logger.info(`Now selected`)
        return $('#licence-to-start').click()
      case 'AnotherTime':
        logger.info(`Another time selected`)
        return $('#licence-to-start-2').click()
    }
  }

  twoDaysFromToday () {
    const now = moment()
    const twoDaysFromToday = now.add(2, 'days')
    const day = moment(twoDaysFromToday).date()
    const month = moment(twoDaysFromToday).month() + 1
    const year = moment(twoDaysFromToday).year()
    $('#licence-start-date-day').setValue(day)
    $('#licence-start-date-month').setValue(month)
    $('#licence-start-date-year').setValue(year)
    logger.info(`Date of Birth set as: ${day}/${month}/${year}`)
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
    logger.info(`Date of Birth set as: ${day}/${month}/${year}`)
  }
}
module.exports = new StartWhenPage('/buy/start-kind')
