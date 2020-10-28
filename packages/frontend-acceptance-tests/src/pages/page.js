import { logger } from 'defra-logging-facade'
import { expect } from 'chai'

class Page {
  constructor (url) {
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
          logger.debug(`Waiting for ${currentUrl} to end with ${this.url}`)
          return currentUrl.endsWith(this.url)
        },
        {
          timeout: waitforTimeout,
          timeoutMsg: `Expected Url ${currentUrl} to end with ${this.url}`
        }
      )
    } catch (error) {
      logger.error(error)
      throw error
    }
  }

  checkErrorsOnPage (errorMessage) {
    const errorElement = $(`*=${errorMessage}`)
    expect(errorElement.isExisting()).to.equal(true)
  }

  continue (selector = '#continue') {
    this.checkUrl()
    $(selector).click()
    logger.info('Click continue and navigate to the next page')
  }
}

export default Page
