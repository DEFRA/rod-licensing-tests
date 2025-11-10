'use strict'

import Page from './page.js'
import logger from '../utils/logger.js'
import { expect } from 'chai'

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
    const isExisting = await countryOption.isExisting()
    expect(isExisting).to.equal(shouldExist)
  }
}

export default new AddressEntry('/buy/address')
