import { createPermission, PERMISSION_EXPIRY } from '../src/lib/createPermissions.js'
import sinon from 'sinon'
import Dynamics from '../src/lib/dynamics-lib-import.js'

describe('createPermissions tests', () => {
  sinon.stub(Dynamics, 'persist')
  const findByExampleStub = sinon.stub(Dynamics, 'findByExample').callsFake(() => [
    {
      id: '07380038-0815-eb11-a813-000d3a649213',
      firstName: 'Homer',
      lastName: 'Simpson',
      birthDate: '1985-03-11',
      email: null,
      mobilePhone: null,
      organisation: null,
      premises: '742',
      street: 'Evergreen Terrace',
      locality: null,
      town: 'Springfield',
      postcode: 'SF30 3SF',
      country: { id: 111, label: 'United Kingdom', description: 'GB' },
      preferredMethodOfConfirmation: { id: 222, label: 'Text', description: 'Text' },
      preferredMethodOfNewsletter: { id: 333, label: 'Email', description: 'Email' },
      preferredMethodOfReminder: { id: 444, label: 'Letter', description: 'Letter' }
    }
  ])

  beforeEach(() => {
    findByExampleStub.resetHistory()
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

  it('licence search provides fields in expected format', async () => {
    await createPermission()
    console.log('findByExampleStub.calls', findByExampleStub.firstCall.args[0])
    expect(findByExampleStub.firstCall.firstArg.firstName).to.equal('Homer')
    expect(findByExampleStub.firstCall.firstArg.lastName).to.equal('Simpson')
    expect(findByExampleStub.firstCall.firstArg.birthDate).to.equal('1985-03-11T00:00:00.000Z')
    expect(findByExampleStub.firstCall.firstArg.premises).to.equal('742')
    expect(findByExampleStub.firstCall.firstArg.postcode).to.equal('SF30 3SF')
  })

  it('sets reference number in the expected format', async () => {
    const permission = await createPermission()
    expect(/[0-9]{8}-[A-Z0-9]{7}-[A-Z0-9]{6}/.test(permission.referenceNumber)).to.be.true
  })
})
