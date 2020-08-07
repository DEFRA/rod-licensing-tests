import generateRecord from '../src/generateRecord.js'

describe('generate record tests', () => {
  it('gets a random name from provided name array', () => {
    const names = getNames()
    const { REC: r } = generateRecord(getAddresses(), names)
    expect(names.some(n => n.forename === r.LICENSEE_FORNAME && n.surname === r.LICENSEE_SURNAME)).to.be.true
  });

  ([
    { addresses: [{ address1: 'Flat 1a', address2: 'Montague House', address3: '15' }], output: 'Flat 1a, Montague House, 15, ' },
    { addresses: [{ address1: '12', address2: 'Montague Terrace' }], output: '12, Montague Terrace, ' },
    { addresses: [{ address1: "Hannah's Cottage", address3: '3' }], output: "Hannah's Cottage, 3, " }
  ]).forEach(test => {
    it('concatenates address1, address2 and address3 to make premises', () => {
      const { REC: { LICENSEE_ADDRESS: { PREMISES: premises } }} = generateRecord(test.addresses, getNames())
      expect(premises).to.equal(test.output)
    })    
  });

  it('gets a random address from provided address array', () => {
    const addresses = getAddresses()
    const { REC: { LICENSEE_ADDRESS: la } } = generateRecord(addresses, getNames())
    expect(addresses.some(a => 
      la.PREMISES === [1,2,3].map(x => !!a[`address${x}`] ? `${a[`address${x}`]}, ` : '').join('') &&
      la.TOWN === a.address6 &&
      la.POSTCODE === a.postCode
    )).to.be.ok
  })

  it('sets DD_REFERENCE as a six-digit random number', () => {
    const { REC: { DD_REFERENCE }} = generateRecord(getAddresses(), getNames())
    expect(/^[0-9]{6}$/.test(DD_REFERENCE)).to.be.true
  })
})

const getNames = () => [
  { forename: 'Patrick', surname: 'Bamford' },
  { forename: 'Gjanni', surname: 'Alioski' },
  { forename: 'Kalvin', surname: 'Phillips' },
  { forename: 'Stuart', surname: 'Dallas' },
  { forename: 'Pablo', surname: 'Hernandez' }
]

const getAddresses = () => [
  { address1: '8', address2: 'Scott Street', address6: 'York', postCode: 'YO23 1NS', },
  { address1: '67', address2: 'The Mount', address6: 'York', postCode: 'YO24 1AX' },
  { address1: '3', address2: 'Vinery Road', address3: 'Burley', address6: 'Leeds', postCode: 'LS4 2LB' }
]