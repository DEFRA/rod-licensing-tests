import Page from './page'
import { logger } from 'defra-logging-facade'

class TermsAndConditionsPage extends Page {
  setAgreeCheckbox () {
    $("label[for='agree']").waitForDisplayed(1000)
    $("label[for='agree']").click()
    logger.info('Terms and Conditions checkbox selected')
  }
}

export default new TermsAndConditionsPage('/buy/terms-conditions')
