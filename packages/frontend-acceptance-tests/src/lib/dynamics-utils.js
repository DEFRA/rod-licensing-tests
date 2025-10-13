'use strict'

export const mapFields = (data, transformSpec) => {
  const transformedData = {}
  for (const key in data) {
    if (transformSpec[key]) {
      transformedData[transformSpec[key]] = data[key]
    } else if (key.startsWith('defra_')) {
      transformedData[key.replace(/^defra_/, '')] = data[key]
    }
  }
  return transformedData
}
