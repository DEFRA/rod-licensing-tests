const createDebug = require('debug')

const IGNORE_PATHS = ['/public/', '/robots.txt']
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

function logRequest (request, h) {
  if (IGNORE_PATHS.some(ignorePath => request.path.includes(ignorePath))) {
    return h.continue
  }
  const { method, path, payload } = request
  const body = payload ? ` - ${JSON.stringify(payload)}` : ''
  info(`${method.toUpperCase()} ${path}${body}`)
  return h.continue
}
function logResponse (request, h) {
  if (IGNORE_PATHS.some(ignorePath => request.path.includes(ignorePath))) {
    return h.continue
  }
  const { method, path, response } = request
  info(`${method.toUpperCase()} ${path} -> ${response?.statusCode}`)
    return h.continue
}
module.exports = {
  info,
  error,
  debug,
  logRequest,
  logResponse
}