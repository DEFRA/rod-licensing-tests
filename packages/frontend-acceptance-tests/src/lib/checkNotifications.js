'use strict'

import { dynamicsClient } from './dynamics-client.js'
const logger = require('./logger-utils.js')

const MAX_ATTEMPTS = 10
const DELAY = 5000

/**
 * Check for a notification record for the given permission number
 * @param permissionNumber
 * @returns {Promise<boolean>}
 */
export default async (permissionNumber) => {
  let notified = false
  let i = 0
  while (i++ < MAX_ATTEMPTS && !notified) {
    info(`Checking notification status for permission ${permissionNumber}`)
    // Wait DELAY milliseconds before querying dynamics
    await new Promise(resolve => setTimeout(resolve, DELAY))
    const { value: records } = await dynamicsClient.retrieveRequest({
      collection: 'defra_notifications',
      filter: `defra_PermissionId/defra_name eq '${permissionNumber}' and defra_status eq 910400001`
    })
    info('Records fetched: ', records)
    notified = records.length !== 0
  }
  return notified
}
