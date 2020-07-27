'use strict'

const Page = require('./page')
const { logger } = require('defra-logging-facade')

class ConcessionProofPage extends Page {
  // Set the value in first name and surname fields
  setNiNumber (setNiNum) {
    logger.info(`National Insurance number added: ${setNiNum}`)
    $('#ni-number').setValue(setNiNum)
  }
}
module.exports = new ConcessionProofPage('/buy/benefit-ni-number')
