
const getRandomElementFromArray = arr => arr[Math.floor(Math.random() * arr.length)]

export default function generateRecord(addresses, names) {
  const name = getRandomElementFromArray(names)
  const a = getRandomElementFromArray(addresses)

  return {
    REC: {
      DD_REFERENCE: Math.round(Math.random() * 10**6),
      LICENSEE_FORNAME: name.forename,
      LICENSEE_SURNAME: name.surname,
      LICENSEE_ADDRESS: {
        PREMISES: [1,2,3].map(x => !!a[`address${x}`] ? `${a[`address${x}`]}, ` : '').join(''),
        STREET: a.address4,
        LOCALITY: a.address5,
        TOWN: a.address6,
        POSTCODE:  a.postCode
      },
      PERMIT_TYPE: 'Salmon 12 month 1 Rod Licence (Full)',
      SEASON: 2020,
      DOB: '1961-03-01',
      AMOUNT: 82,
      MARKETING_FLAG: false
    }
  }
}