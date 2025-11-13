'use strict'

import Page from './page.js'
import { info } from '../lib/logger-utils.js'

class NumberOfRodsPage extends Page {
  async setNumberOfRods (numberOfRods) {
    switch (numberOfRods) {
      case 2:
        info(`Number of rods selected: ${numberOfRods}`)
        return $('#number-of-rods').click()
      case 3:
        info(`Number of rods selected: ${numberOfRods}`)
        return $('#number-of-rods-2').click()
      default:
        info(`Number of rods selected: ${numberOfRods}`)
        return $('#number-of-rods').click()
    }
  }
}

export default new NumberOfRodsPage('/buy/number-of-rods')
