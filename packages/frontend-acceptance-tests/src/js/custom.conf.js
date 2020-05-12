'use strict'

// e.g. part 1
// const cucumber = require('../../node_modules/defra-wdio-core/src/conf/frameworks/cucumber.conf').config

const custom = {

  browserstackProject: `change this in 'custom.conf.js'`,

  framework: 'cucumber',

  /* If you would like to override any WebDriver or WDIO default options, enter them below
  as key value pairs (e.g. maxInstances: 1). See https://webdriver.io/docs/options.html for
  a complete list.

  Please note, if you would like to override an option that takes an array/object, you will
  either need to provide the entire array/object, (not just the element/properties you would
  like to override) or require the array/object and build a new array/object including the
  previous one; we are not using lodash.merge at this time due to security vulnerabilities */

  // e.g. part 2
  // cucumberOpts: Object.assign(cucumber.cucumberOpts, {
  //   tagExpression: '@pension and not @tool'
  // }),

  baseUrl: 'https://www.gov.uk/'

}

exports.config = custom
