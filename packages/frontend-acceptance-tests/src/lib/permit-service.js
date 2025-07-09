'use strict'

import { dynamicsClient } from './dynamics-client.js'
import { mapFields } from './dynamics-utils.js'

export const PERMIT = {
  COARSE_12M_2_ROD_FULL: 'Coarse 12 month 2 Rod Licence (Full)',
  COARSE_8D_2_ROD_FULL: 'Coarse 8 day 2 Rod Licence (Full)',
  COARSE_8D_2_ROD_SENIOR: 'Coarse 8 day 2 Rod Licence (Senior)',
  COARSE_1D_2_ROD_FULL: 'Coarse 1 day 2 Rod Licence (Full)',
  COARSE_1D_2_ROD_SENIOR: 'Coarse 1 day 2 Rod Licence (Senior)',

  SALMON_12M_1_ROD_SENIOR: 'Salmon 12 month 1 Rod Licence (Senior)',
  SALMON_8D_1_ROD_FULL: 'Salmon 8 day 1 Rod Licence (Full)',
  SALMON_1D_1_ROD_FULL: 'Salmon 1 day 1 Rod Licence (Full)',
  SALMON_1D_1_ROD_SENIOR: 'Salmon 1 day 1 Rod Licence (Senior)'
}

const permitTransformSpec = {
  defra_permitid: 'permitId',
  defra_name: 'description'
}

export async function getPermit(fullPermitName) {
  const { value: records } = await dynamicsClient.retrieveRequest({
    collection: 'defra_permits',
    filter: `statecode eq 0 and defra_name eq '${fullPermitName}'`,
    select: ['defra_permitid', 'defra_name']
  })
  if (records.length) {
    const permit = mapFields(records[0], permitTransformSpec)
    return permit
  }
  return null
}
