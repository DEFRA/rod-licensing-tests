'use strict'

const Page = require('./page')
const { expect } = require('chai')

class ConfirmContactDetails extends Page {
  confirmTitle (contactMethod) {
    const title = $('#contact-information-question').getText()
    expect(title).to.equal(`Is the ${contactMethod} correct?`)
  }

  itsCorrect () {
    $(`*=It's correct`).click()
  }
}
module.exports = new ConfirmContactDetails('/buy/check-confirmation-contact')
