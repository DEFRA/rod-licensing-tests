export const PERMISSION_EXPIRY = {
  YESTERDAY: -1,
  TODAY: 0,
  TOMORROW: 1
}

const getEndDate = expiryDateSpec => {
  const today = new Date()
  if (expiryDateSpec === PERMISSION_EXPIRY.YESTERDAY) {
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)
    return yesterday
  } else if (expiryDateSpec === PERMISSION_EXPIRY.TOMORROW) {
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow
  }
  return today
}

export const createPermission = (expiryDateSpec = PERMISSION_EXPIRY.TODAY) => {
  return {
    endDate: getEndDate(expiryDateSpec).toISOString()
  }
}
