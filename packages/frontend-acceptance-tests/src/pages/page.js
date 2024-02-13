'use strict'
const { logger } = require('defra-logging-facade')
const expect = require('chai').expect

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
          const onExpectedPage =  currentUrl.endsWith(this.url)
          logger.debug(`Does it? ${onExpectedPage ? 'It sure does' : 'Nope, not yet'}`)
          return onExpectedPage
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
    const isExisting = await errorElement.isExisting()
    expect(isExisting).to.equal(true)
  }

  async continue (selector = '#continue') {
    await this.checkUrl()
    await $(selector).click()
    logger.info(`Click continue and navigate to the next page`)
  }
}

module.exports = Page
