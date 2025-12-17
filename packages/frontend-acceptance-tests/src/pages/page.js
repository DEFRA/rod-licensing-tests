'use strict'

import logger from'../lib/logger-utils.js'
import { expect } from 'chai'

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

  async checkErrorsOnPage (errorMessage) {
    const errorElement = $(`*=${errorMessage}`)
    await errorElement.waitForDisplayed({ timeout: 2000 })
    const isExisting = await errorElement.isExisting()
    expect(isExisting).to.equal(true)
  }

  async continue (selector = '#continue') {
    await this.checkUrl()
    await $(selector).click()
    logger.info(`Click continue and navigate to the next page`)
  }
}

export default Page
