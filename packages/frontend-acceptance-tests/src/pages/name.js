'use strict'

import Page from './page.js'
import { logger } from 'defra-logging-facade.js'

class NamePage extends Page {
  // Set the value in first name and surname fields
  async setName (setFirstName, setSurName) {
    await $('#first-name').setValue(setFirstName)
    await $('#last-name').setValue(setSurName)
    logger.info(`Name entered as:  ${setFirstName} ${setSurName}`)
  }
}

export default new NamePage('/buy/name')
