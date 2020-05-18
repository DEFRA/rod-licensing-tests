'use strict'

const assert = require('assert')
const moment = require('moment')
const Page = require('./page')
const {logger} = require('defra-logging-facade')

class StartTimePage extends Page {
    startTimePicker (time) {
      logger.info(`Time is set: ${time}`)
      switch (time) {
        case 'midnight':
          return $('label[for=_0]').click()
        case '12am':
          return $('label[for=_0]').click()
        case '1am':
          return $('label[for=_1]').click()
        case '2am':
          return $('label[for=_2]').click()
        case '3am':
          return $('label[for=_3]').click()
        case '4am':
          return $('label[for=_4]').click()
        case '5am':
          return $('label[for=_5]').click()
        case '6am':
          return $('label[for=_6]').click()
        case '7am':
          return $('label[for=_7]').click()
        case '8am':
          return $('label[for=_8]').click()
        case '9am':
          return $('label[for=_9]').click()
        case '10am':
          return $('label[for=_10]').click()
        case '11am':
          return $('label[for=_11]').click()
        case 'midday':
          return $('label[for=_12]').click()
        case '12pm':
          return $('label[for=_12').click()
        case '1pm':
          return $('label[for=_13]').click()
        case '2pm':
          return $('label[for=_14]').click()
        case '3pm':
          return $('label[for=_15]').click()
        case '4pm':
          return $('label[for=_16]').click()
        case '5pm':
          return $('label[for=_17]').click()
        case '6pm':
          return $('label[for=_18]').click()
        case '7pm':
          return $('label[for=_19]').click()
        case '8pm':
          return $('label[for=_20]').click()
        case '9pm':
          return $('label[for=_21]').click()
        case '10pm':
          return $('label[for=_22]').click()
        case '11pm':
          return $('label[for=_23]').click()
      }
    }
}
module.exports = new StartTimePage('/buy/start-time')
