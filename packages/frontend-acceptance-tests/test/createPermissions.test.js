import { createPermission, PERMISSION_EXPIRY } from '../src/lib/createPermissions.js'
import sinon from 'sinon'
import dynamicsClient from '../src/lib/dynamics-client.js'

const getSampleContact = (
  {
    birthdate,
    lastname,
    firstname,
    emailaddress1,
    mobilephone,
    defra_premises,
    defra_street,
    defra_locality,
    defra_town,
    defra_postcode,
    defra_country,
    defra_preferredmethodofconfirmation,
    defra_preferredmethodofnewsletter,
    defra_preferredmethodofreminder
  } = {
    birthdate: '1985-03-11',
    lastname: 'Simpson',
    firstname: 'Homer',
    emailaddress1: 'example@example.com',
    mobilephone: '07712345678',
    defra_premises: '742',
    defra_street: 'Evergreen Terrace',
    defra_locality: null,
    defra_town: 'Springfield',
    defra_postcode: 'SF30 3SF',
    defra_country: 910400184,
    defra_preferredmethodofconfirmation: 910400000,
    defra_preferredmethodofnewsletter: 910400000,
    defra_preferredmethodofreminder: 910400001
  }
) => ({
  '@odata.etag': 'W/"127238602"',
  birthdate,
  lastname,
  firstname,
  emailaddress1,
  mobilephone,
  defra_premises,
  defra_street,
  defra_locality,
  defra_town,
  defra_postcode,
  defra_country,
  defra_preferredmethodofconfirmation,
  defra_preferredmethodofnewsletter,
  defra_preferredmethodofreminder,
  contactid: '07380038-0815-eb11-a813-000d3a649213'
})

describe('createPermissions tests', () => {
  // sinon.stub(Dynamics, 'persist')
  const retrieveContactStub = sinon.stub(dynamicsClient, 'retrieveRequest').withArgs(sinon.match({ collection: 'contacts' }))

  beforeEach(() => {
    retrieveContactStub.returns({
      value: [getSampleContact()]
    })
    retrieveContactStub.resetHistory()
  })
  ;[
    { today: new Date(2020, 0, 1, 9, 15, 22), tomorrow: '2020-01-02T09:15:22.000Z', yesterday: '2019-12-31T09:15:22.000Z' },
    { today: new Date(2020, 9, 15, 13, 28, 59), tomorrow: '2020-10-16T12:28:59.000Z', yesterday: '2020-10-14T12:28:59.000Z' },
    { today: new Date(2020, 1, 29, 6, 59, 28), tomorrow: '2020-03-01T06:59:28.000Z', yesterday: '2020-02-28T06:59:28.000Z' },
    { today: new Date(2020, 2, 1, 22, 1, 5), tomorrow: '2020-03-02T22:01:05.000Z', yesterday: '2020-02-29T22:01:05.000Z' },
    { today: new Date(2020, 2, 31, 17, 10, 5), tomorrow: '2020-04-01T16:10:05.000Z', yesterday: '2020-03-30T16:10:05.000Z' } // BST
  ].forEach(({ today, tomorrow, yesterday }) => {
    describe(`tests when today is ${today.toLocaleDateString()}`, () => {
      let mockClock

      before(() => {
        mockClock = sinon.useFakeTimers(today)
      })

      after(() => {
        mockClock.restore()
      })

      it('creates a permission that expires today', async () => {
        const permission = await createPermission()
        expect(permission.endDate).to.equal(today.toISOString())
      })

      it('creates a permission that expired yesterday', async () => {
        const permission = await createPermission(PERMISSION_EXPIRY.YESTERDAY)
        expect(permission.endDate).to.equal(yesterday)
      })

      it('creates a permission that expires tomorrow', async () => {
        const permission = await createPermission(PERMISSION_EXPIRY.TOMORROW)
        expect(permission.endDate).to.equal(tomorrow)
      })

      it('permission expiring yesterday started a year ago', async () => {
        const yearAndADayAgo = new Date(yesterday)
        yearAndADayAgo.setFullYear(yearAndADayAgo.getFullYear() - 1)
        const permission = await createPermission(PERMISSION_EXPIRY.YESTERDAY)
        expect(permission.startDate).to.equal(yearAndADayAgo.toISOString())
      })

      it('permission expiring today started a year ago', async () => {
        const yearAgo = new Date(today)
        yearAgo.setFullYear(yearAgo.getFullYear() - 1)
        const permission = await createPermission()
        expect(permission.startDate).to.equal(yearAgo.toISOString())
      })

      it('permission expiring tomorrow started a year ago', async () => {
        const yearAgoTomorrow = new Date(tomorrow)
        yearAgoTomorrow.setFullYear(yearAgoTomorrow.getFullYear() - 1)
        const permission = await createPermission(PERMISSION_EXPIRY.TOMORROW)
        expect(permission.startDate).to.equal(yearAgoTomorrow.toISOString())
      })

      it('sets issue date to equal start date', async () => {
        const permission = await createPermission()
        expect(permission.startDate).to.equal(permission.issueDate)
      })
    })
  })
  ;[
    getSampleContact(),
    getSampleContact({ firstname: 'Bart', birthdate: '2010-06-08' }),
    getSampleContact({ firstname: 'Abraham', birthdate: '1960-12-01', defra_premises: '101' })
  ].forEach(contact => {
    it('creates licensee for permission', async () => {
      retrieveContactStub.reset()
      retrieveContactStub.returns({
        value: [contact]
      })
      const { licensee } = await createPermission()
      expect(licensee).to.deep.include({
        firstName: contact.firstname,
        lastName: contact.lastname,
        birthDate: contact.birthdate,
        email: contact.emailaddress1,
        mobilePhone: contact.mobilephone,
        premises: contact.defra_premises,
        street: contact.defra_street,
        locality: contact.defra_locality,
        town: contact.defra_town,
        postcode: contact.defra_postcode,
        country: contact.defra_country,
        preferredMethodOfConfirmation: contact.defra_preferredmethodofconfirmation,
        preferredMethodOfNewsletter: contact.defra_preferredmethodofnewsletter,
        preferredMethodOfReminder: contact.defra_preferredmethodofreminder
      })
    })
  })

  describe('contact persistance', () => {
    const stubs = []
    const createStubs = () => {
      retrieveContactStub.reset()
      retrieveContactStub.returns({
        value: []
      })
      const startBatchStub = sinon.stub(dynamicsClient, 'startBatch')
      const createRequestStub = sinon.stub(dynamicsClient, 'createRequest')
      const executeBatchStub = sinon.stub(dynamicsClient, 'executeBatch')
      return {
        startBatchStub,
        createRequestStub,
        executeBatchStub
      }
    }

    const restoreStubs = stubs => stubs.forEach(stub => stub.reset())

    it('persists contact if not found', async () => {
      const { createRequestStub, ...otherStubs } = createStubs()
      await createPermission()
      const { '@odata.etag': odataetag, contactid, ...entity } = getSampleContact()
      expect(createRequestStub.firstCall.firstArg).to.deep.include({
        collection: 'contacts',
        entity
      })
      const guidRegex = /[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/
      // sinon doesn't allow mocking of ES6 modules and I'll be damned if I'm wrapping the uuid import just for this
      expect(guidRegex.test(createRequestStub.firstCall.firstArg.contentId)).to.be.true

      restoreStubs([createRequestStub, ...Object.values(otherStubs)])
    })

    it('returns newly created contact in generated permission', async () => {
      const { '@odata.etag': odataetag, contactid, ...entity } = getSampleContact()
      const stubs = createStubs()

      const { licensee } = await createPermission()

      expect(licensee).to.deep.include({
        entity
      })

      restoreStubs(Object.values(stubs))
    })
  })

  // it('licence search provides fields in expected format', async () => {
  //   await createPermission()
  //   console.log('findByExampleStub.calls', findByExampleStub.firstCall.args[0])
  //   expect(findByExampleStub.firstCall.firstArg.firstName).to.equal('Homer')
  //   expect(findByExampleStub.firstCall.firstArg.lastName).to.equal('Simpson')
  //   expect(findByExampleStub.firstCall.firstArg.birthDate).to.equal('1985-03-11T00:00:00.000Z')
  //   expect(findByExampleStub.firstCall.firstArg.premises).to.equal('742')
  //   expect(findByExampleStub.firstCall.firstArg.postcode).to.equal('SF30 3SF')
  // })

  it('sets reference number in the expected format', async () => {
    const permission = await createPermission()
    expect(/[0-9]{8}-[A-Z0-9]{7}-[A-Z0-9]{6}/.test(permission.referenceNumber)).to.be.true
  })
})
