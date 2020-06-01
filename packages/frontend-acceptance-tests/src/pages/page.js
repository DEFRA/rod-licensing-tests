'use strict'

const { Core } = require('defra-wdio-core')
const { logger } = require('defra-logging-facade')
const expect = require('chai').expect

const CONTINUE_SELECTOR = '#continue'

class Page extends Core {
  constructor (url) {
    super(url)
    this.url = url
  }

  open () {
    browser.url(this.url)
    this.checkUrl()
  }

  checkUrl () {
    const waitforTimeout = browser.options.waitforTimeout

    const getPageUrl = () => {
      let url = browser.getUrl()
      if (url.includes('?')) {
        url = url.substr(0, url.indexOf('?'))
      }
      return url
    }
    let currentUrl = getPageUrl()
    try {
      browser.waitUntil(
        () => {
          currentUrl = getPageUrl()
          return currentUrl.endsWith(this.url)
        },
        waitforTimeout,
        `Expected Url ${currentUrl} to end with ${this.url}`
      )
    } catch (error) {
      this.screenshot()
      throw error
    }
  }

  checkErrorsOnPage (errorMessage) {
    const errorElement = $(`span=${errorMessage}`)
    expect(errorElement.isExisting()).to.equal(true)
  }

  continue () {
    this.checkUrl()
    this.clickNavigationLink(CONTINUE_SELECTOR)
    logger.info(` Click continue and navigate to the next page`)
  }

  clickNavigationLink (selector) {
    $(selector).click()
  }
}

module.exports = Page
