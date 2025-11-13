const createDebug = require('debug')

const COLORS = {
  GREEN: 2,
  RED: 1,
  BLUE: 4
}
// if DEBUG is not set, default to show error and info
if (!process.env.DEBUG) {
  createDebug.enable('rod-licensing-tests:error,rod-licensing-tests:info')
}
createDebug.inspectOpts.colors = true

const info = createDebug('rod-licensing-tests:info')
info.color = COLORS.GREEN

const error = createDebug('rod-licensing-tests:error')
error.color = COLORS.RED

const debug = createDebug('rod-licensing-tests:debug')
debug.color = COLORS.BLUE

module.exports = {
  info,
  error,
  debug
}