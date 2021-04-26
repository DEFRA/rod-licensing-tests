'use strict'

const Page = require('./page')
const { logger } = require('defra-logging-facade')
const { expect } = require('chai')

class AddressEntry extends Page {
  // Input address data
  setAddressFields (buildingNo, street, city, postcode, country) {
    $('#premises').setValue(buildingNo)
    logger.info(`Building Number set as: ${buildingNo}`)

    $('#street').setValue(street)
    logger.info(`Address line 1 set as: ${street}`)

    $('#town').setValue(city)
    logger.info(`City set as: ${city}`)

    $('#postcode').setValue(postcode)
    logger.info(`Postcode set as: ${postcode}`)

    $('#country-code').click()
    $(`option[value="${country}"]`).click()
    logger.info(`Country set as: ${country}`)
  }

  checkCountryInDropDown (country) {
    expect($(`#country-code option[value='${country}']`)).to.exist()
  }
}

module.exports = new AddressEntry('/buy/address')
