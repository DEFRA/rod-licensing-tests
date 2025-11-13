'use strict'

const { expect } = require('chai')
const logger = require('../lib/logger-utils.js')

class Page {
  constructor (url) {
    this.url = url
  }

  async open () {
    await browser.url(this.url)
    await this.checkUrl()
  }

  async checkUrl () {
    const waitforTimeout = browser.options.waitforTimeout

    const getPageUrl = async () => {
      let url = await browser.getUrl()
      const charactersToIgnore = ['?', '#']
      for (const characterToIgnore of charactersToIgnore) {
        if (url.includes(characterToIgnore)) {
          url = url.substr(0, url.indexOf(characterToIgnore))
        }
      }
      return url
    }
    let currentUrl = await getPageUrl()
    try {
      await browser.waitUntil(
        async () => {
          currentUrl = await getPageUrl()
          debug(`Waiting for ${currentUrl} to end with ${this.url}`)
          return currentUrl.endsWith(this.url)
        },
        {
          timeout: waitforTimeout,
          timeoutMsg: `Expected Url ${currentUrl} to end with ${this.url}`
        }
      )
    } catch (err) {
      logger.error(err)
      throw err
    }
  }

  async checkErrorsOnPage (errorMessage) {
    const errorElement = $(`*=${errorMessage}`)
    const isExisting = await errorElement.isExisting()
    expect(isExisting).to.equal(true)
  }

  async continue (selector = '#continue') {
    await this.checkUrl()
    await $(selector).click()
    info(`Click continue and navigate to the next page`)
  }
}

export default Page
