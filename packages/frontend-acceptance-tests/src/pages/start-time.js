'use strict'
const Page = require('./page')
const { logger } = require('defra-logging-facade')

class StartTimePage extends Page {
  async startTimePicker(time) {
    logger.info(`Time is set: ${time}`)
    switch (time) {
      case 'midnight':
        return $('#licence-start-time-am').click()
      case '1am':
        return $('#licence-start-time-am-2').click()
      case '2am':
        return $('#licence-start-time-am-3').click()
      case '3am':
        return $('#licence-start-time-am-4').click()
      case '4am':
        return $('#licence-start-time-am-5').click()
      case '5am':
        return $('#licence-start-time-am-6').click()
      case '6am':
        return $('#licence-start-time-am-7').click()
      case '7am':
        return $('#licence-start-time-am-8').click()
      case '8am':
        return $('#licence-start-time-am-9').click()
      case '9am':
        return $('#licence-start-time-am-10').click()
      case '10am':
        return $('#licence-start-time-am-11').click()
      case '11am':
        return $('#licence-start-time-am-12').click()
      case 'midday':
        return $('#licence-start-time-pm').click()
      case '1pm':
        return $('#licence-start-time-pm-2').click()
      case '2pm':
        return $('#licence-start-time-pm-3').click()
      case '3pm':
        return $('#licence-start-time-pm-4').click()
      case '4pm':
        return $('#licence-start-time-pm-5').click()
      case '5pm':
        return $('#licence-start-time-pm-6').click()
      case '6pm':
        return $('#licence-start-time-pm-7').click()
      case '7pm':
        return $('#licence-start-time-pm-8').click()
      case '8pm':
        return $('#licence-start-time-pm-9').click()
      case '9pm':
        return $('#licence-start-time-pm-10').click()
      case '10pm':
        return $('#licence-start-time-pm-11').click()
      case '11pm':
        return $('#licence-start-time-pm-12').click()
    }
  }
}
module.exports = new StartTimePage('/buy/start-time')
