'use strict'
const Page = require('./page')
const { logger } = require('defra-logging-facade')
const moment = require('moment')

class StartWhenPage extends Page {
  async setStartKind(startKind) {
    switch (startKind) {
      case 'Now':
        logger.info(`Now selected`)
        return $('#licence-to-start').click()
      case 'AnotherTime':
        logger.info(`Another time selected`)
        return $('#licence-to-start-2').click()
    }
  }

  async twoDaysFromToday() {
    const now = moment()
    const twoDaysFromToday = now.add(2, 'days')
    const day = moment(twoDaysFromToday).date()
    const month = moment(twoDaysFromToday).month() + 1 // months are zero indexed, so January is month 0.
    const year = moment(twoDaysFromToday).year()
    await $('#licence-start-date-day').setValue(day)
    await $('#licence-start-date-month').setValue(month)
    await $('#licence-start-date-year').setValue(year)
    logger.info(`Date of Birth set as: ${day}/${month}/${year}`)
  }

  async subtractTwoDaysFromToday() {
    const now = moment()
    const subtractTwoDaysFromToday = await now.subtract(2, 'days')
    const day = moment(subtractTwoDaysFromToday).date()
    const month = moment(subtractTwoDaysFromToday).month() + 1 // months are zero indexed, so January is month 0.
    const year = moment(subtractTwoDaysFromToday).year()
    await $('#licence-start-date-day').setValue(day)
    await $('#licence-start-date-month').setValue(month)
    await $('#licence-start-date-year').setValue(year)
    logger.info(`Date of Birth set as: ${day}/${month}/${year}`)
  }
}
module.exports = new StartWhenPage('/buy/start-kind')
