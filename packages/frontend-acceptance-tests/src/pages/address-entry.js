'use strict'

const Page = require('./page')
const { logger } = require('defra-logging-facade')
const { expect } = require('chai')

class AddressEntry extends Page {
  // Input address data
  async setAddressFields (buildingNo, street, city, postcode, country) {
    await $('#premises').setValue(buildingNo)
    logger.info(`Building Number set as: ${buildingNo}`)

    await $('#street').setValue(street)
    logger.info(`Address line 1 set as: ${street}`)

    await $('#town').setValue(city)
    logger.info(`City set as: ${city}`)

    await $('#postcode').setValue(postcode)
    logger.info(`Postcode set as: ${postcode}`)

    await $('#country-code').click()
    await $(`option[value="${country}"]`).click()
    logger.info(`Country set as: ${country}`)
  }

  async checkCountryInDropDown (country, shouldExist) {
    const countryOption = $(`#country-code option[value="${country}"]`)
    expect(await countryOption.isExisting()).to.equal(shouldExist)
  }
}

module.exports = new AddressEntry('/buy/address')
