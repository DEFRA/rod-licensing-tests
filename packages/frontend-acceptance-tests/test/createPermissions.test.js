import { createPermission, PERMISSION_EXPIRY } from '../src/lib/createPermissions.js'
import sinon from 'sinon'

describe('createPermissions tests', () => {
  [
    { today: new Date(2020, 0, 1), tomorrow: '02/01/2020', yesterday: '31/12/2019' },
    { today: new Date(2020, 9, 15), tomorrow: '16/10/2020', yesterday: '14/10/2020' },
    { today: new Date(2020, 1, 29), tomorrow: '01/03/2020', yesterday: '28/02/2020' },
    { today: new Date(2020, 2, 1), tomorrow: '02/03/2020', yesterday: '29/02/2020' }
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
        expect(new Date(permission.endDate).toLocaleDateString()).to.equal(new Date().toLocaleDateString())
      })

      it('creates a permission that expired yesterday', () => {
        const permission = createPermission(PERMISSION_EXPIRY.YESTERDAY)
        expect(new Date(permission.endDate).toLocaleDateString()).to.equal(yesterday)
      })

      it('creates a permission that expires tomorrow', () => {
        const permission = createPermission(PERMISSION_EXPIRY.TOMORROW)
        expect(new Date(permission.endDate).toLocaleDateString()).to.equal(tomorrow)
      })
    })
  })
})
