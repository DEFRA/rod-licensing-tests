'use strict'

import Page from './page.js'
import { info } from '../lib/logger-utils.js'

class SummmaryPage extends Page {
  async typeChange () {
    await $('#change-licence-type').waitForDisplayed(1000)
    info(`On the licence summary page`)
    await $('#change-licence-type').click()
    info(`On the licence type page`)
  }

  async concessionChange () {
    await $('#change-benefit-check').waitForDisplayed(1000)
    info(`On the licence Summary page`)
    await $('#change-benefit-check').click()
    info(`On the Benefit Check page`)
  }

  async startChange () {
    await $('#change-to-start').waitForDisplayed(1000)
    info(`On the licence Summary page`)
    await $('#change-to-start').click()
    info(`On the Start From page`)
  }

  async rodsChange () {
    await $('#change-number-of-rods').waitForDisplayed(1000)
    info(`On the licence Summary page`)
    await $('#change-number-of-rods').click()
    info(`On the Number of Rods page`)
  }
}

export default new SummmaryPage('/buy/licence-summary')
