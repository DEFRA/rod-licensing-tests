'use strict'

import Page from './page.js'
import { expect } from 'chai'

class ConfirmContactDetails extends Page {
  async confirmTitle (contactMethod) {
    const title = await $('#contact-information-question').getText()
    expect(title).to.equal(`Is the ${contactMethod} correct?`)
  }

  async itsCorrect () {
    await $(`*=It’s correct`).click()
  }
}

export default new ConfirmContactDetails('/buy/check-confirmation-contact')
