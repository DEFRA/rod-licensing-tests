const createDebug = require('debug')

// if DEBUG is not set, default to show error and info
if (!process.env.DEBUG) {
  createDebug.enable('rod-licensing-tests:error,rod-licensing-tests:info')
}
createDebug.inspectOpts.colors = true

const info = createDebug('rod-licensing-tests:info')
info.color = 2 // green

const error = createDebug('rod-licensing-tests:error')
error.color = 1 // red

const debug = createDebug('rod-licensing-tests:debug')
debug.color = 4 // blue

module.exports = {
  info,
  error,
  debug
}