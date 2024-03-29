const moment = require('moment')

const adjustDate = (adjustmentString, adjustmentType, adjustment, subtract = 0) => {
  const mod = adjustmentType === adjustmentString ? -1 : 1
  const adjust = adjustment * mod

  return moment()
    .subtract(subtract, 'years')
    .add(adjust, 'days')
}

module.exports = {
  adjustDate
}
