import { createPermission, PERMISSION_EXPIRY } from '../src/lib/createPermissions.js'
import sinon from 'sinon'
import uuid from '../src/lib/stubbableUuid.js'

describe('createPermissions tests', () => {
  [
    { today: new Date(2020, 0, 1, 9, 15, 22), tomorrow: '2020-01-02T09:15:22.000Z', yesterday: '2019-12-31T09:15:22.000Z' },
    { today: new Date(2020, 9, 15, 13, 28, 59), tomorrow: '2020-10-16T12:28:59.000Z', yesterday: '2020-10-14T12:28:59.000Z' },
    { today: new Date(2020, 1, 29, 6, 59, 28), tomorrow: '2020-03-01T06:59:28.000Z', yesterday: '2020-02-28T06:59:28.000Z' },
    { today: new Date(2020, 2, 1, 22, 1, 5), tomorrow: '2020-03-02T22:01:05.000Z', yesterday: '2020-02-29T22:01:05.000Z' }
  ].forEach(({ today, tomorrow, yesterday }) => {
    describe(`tests when today is ${today.toLocaleDateString()}`, () => {
      let mockClock

      before(() => {
        mockClock = sinon.useFakeTimers(today)
      })

      after(() => {
        mockClock.restore()
      })

      it('creates a permission that expires today', () => {
        const permission = createPermission()
        expect(permission.endDate).to.equal(today.toISOString())
      })

      it('creates a permission that expired yesterday', () => {
        const permission = createPermission(PERMISSION_EXPIRY.YESTERDAY)
        expect(permission.endDate).to.equal(yesterday)
      })

      it('creates a permission that expires tomorrow', () => {
        const permission = createPermission(PERMISSION_EXPIRY.TOMORROW)
        expect(permission.endDate).to.equal(tomorrow)
      })

      it('permission expiring yesterday started a year ago', () => {
        const yearAndADayAgo = new Date(yesterday)
        yearAndADayAgo.setFullYear(yearAndADayAgo.getFullYear() - 1)
        const permission = createPermission(PERMISSION_EXPIRY.YESTERDAY)
        expect(permission.startDate).to.equal(yearAndADayAgo.toISOString())
      })

      it('permission expiring today started a year ago', () => {
        const yearAgo = new Date(today)
        yearAgo.setFullYear(yearAgo.getFullYear() - 1)
        const permission = createPermission()
        expect(permission.startDate).to.equal(yearAgo.toISOString())
      })

      it('permission expiring tomorrow started a year ago', () => {
        const yearAgoTomorrow = new Date(tomorrow)
        yearAgoTomorrow.setFullYear(yearAgoTomorrow.getFullYear() - 1)
        const permission = createPermission(PERMISSION_EXPIRY.TOMORROW)
        expect(permission.startDate).to.equal(yearAgoTomorrow.toISOString())
      })

      it('sets issue date to equal start date', () => {
        const permission = createPermission()
        expect(permission.startDate).to.equal(permission.issueDate)
      })

      it('sets licensee date of birth to be 25 years ago yesterday', () => {
        const permission = createPermission()
        const dateOfBirth = new Date(yesterday)
        dateOfBirth.setFullYear(dateOfBirth.getFullYear() - 25)
        expect(permission.licensee.birthDate).to.equal(dateOfBirth.toISOString())
      })
    })
  })

  it('generates a permit id using uuid', () => {
    const sampleUUID = 'abcdefgh-ijkl-mnop-qrst-uvwxyz012345'
    const uuidStub = sinon.stub(uuid, 'v4')
    uuidStub.onFirstCall().returns(sampleUUID)

    try {
      expect(createPermission().permitId).to.equal(sampleUUID)
    } finally {
      uuidStub.restore()
    }
  })

  const nameMatcher = /[A-Za-z]{3,}/
  const addressMatcher = /([A-Za-z0-9-]{2,}\s)*/
  // const contactMatcher = /(Text|Email|Letter)/

  ;[
    ['firstName', nameMatcher],
    ['lastName', nameMatcher],
    ['email', /[A-Za-z0-9.]{3,}@[A-Za-z0-9]{3,}\.[A-Za-z]{2,}([.A-Za-z]{2,})*/],
    ['mobilePhone', /(\+[0-9]{2}\s|0)[0-9\s]*/],
    ['premises', /([0-9]|[A-Za-z\s])*/],
    ['street', addressMatcher],
    ['locality', addressMatcher],
    ['town', addressMatcher],
    ['postcode', /[A-Za-z]{1,2}[0-9]{1,2}\s[0-9]{1}[A-Za-z]{2}/]
    // ,['country', /[A-Za-z]{2}/]
    // ,['preferredMethodOfConfirmation', contactMatcher]
    // ,['preferredMethodOfNewsletter', contactMatcher]
    // ,['preferredMethodOfReminder', contactMatcher]
  ].forEach(([fieldName, matcher]) => {
    it(`licensee has ${fieldName} matching expected format`, () => {
      const permission = createPermission()
      const matches = matcher.test(permission.licensee[fieldName])
      expect(matches).to.be.true
    })
  })

  it('sets reference number in the expected format', () => {
    const permission = createPermission()
    expect(/[0-9]{8}-[A-Z0-9]{7}-[A-Z0-9]{6}/.test(permission.referenceNumber)).to.be.true
  })
})
