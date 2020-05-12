'use strict'

const { infoMsg } = require('defra-wdio-core')

const hooks = {

  onPrepare: (config, capabilities) => { },
  beforeSession: (config, capabilities, specs) => { },

  before: (capabilities, specs) => {
    if (!browser.capabilities.realMobile) browser.setWindowSize(1600, 1000)
    infoMsg('Session Id', browser.sessionId)
  },

  beforeCommand: (commandName, args) => { },
  afterCommand: (commandName, args, result, error) => { },
  after: (result, capabilities, specs) => { },
  afterSession: (config, capabilities, specs) => { },
  beforeSuite: (suite) => { },
  beforeHook: () => { },
  beforeTest: (test) => { },
  afterTest: (test) => { },
  afterHook: () => { },
  afterSuite: (suite) => { },
  onComplete: (exitCode, config, capabilities, results) => { },
  onReload: (oldSessionId, newSessionId) => { },

  /* Cucumber specific hooks */

  beforeFeature: (uri, feature, scenarios) => { },
  beforeScenario: (uri, feature, scenario, sourceLocation) => { },
  beforeStep: (uri, feature) => { },
  afterStep: (uri, feature, { error, result }) => { },
  afterScenario: (uri, feature, scenario, result, sourceLocation) => { },
  afterFeature: (uri, feature, scenarios) => { }

}

exports.config = hooks
