'use strict'

import Page from './page.js'
const logger = require('../lib/logger-utils.js')
import { expect } from 'chai'

class AddressEntry extends Page {
  // Input address data
  async setAddressFields (buildingNo, street, city, postcode, country) {
    await $('#premises').setValue(buildingNo)
    info(`Building Number set as: ${buildingNo}`)

    await $('#street').setValue(street)
    info(`Address line 1 set as: ${street}`)

    await $('#town').setValue(city)
    info(`City set as: ${city}`)

    await $('#postcode').setValue(postcode)
    info(`Postcode set as: ${postcode}`)

    await $('#country-code').click()
    await $(`option[value="${country}"]`).click()
    info(`Country set as: ${country}`)
  }

  async checkCountryInDropDown (country, shouldExist) {
    const countryOption = $(`#country-code option[value="${country}"]`)
    const isExisting = await countryOption.isExisting()
    expect(isExisting).to.equal(shouldExist)
  }
}

export default new AddressEntry('/buy/address')
