'use strict'

const Page = require('./page')
const { expect } = require('chai')

class ConfirmContactDetails extends Page {
  async confirmTitle (contactMethod) {
    const title = await $('#contact-information-question').getText()
    expect(title).to.equal(`Is the ${contactMethod} correct?`)
  }

  async itsCorrect () {
    await $(`*=It’s correct`).click()
  }
}
module.exports = new ConfirmContactDetails('/buy/check-confirmation-contact')
