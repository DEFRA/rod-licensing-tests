const clientCredentials = require('../lib/client-credentials-grant')
const request = require('request') // bus that carries request back and forth to the test

class GetCRMNotify {
  async fetchCrmNotifyStatus (permissionNumber) {
    return new Promise(function (resolve, reject) {
      // Do async job
      request(
        {
          method: 'GET',
          url:
            process.env.DYNAMICS_ENDPOINT +
            `/api/data/v9.0/defra_notifications?$expand=defra_PermissionId&$filter=defra_PermissionId/defra_name eq '${permissionNumber}' and defra_status eq 910400001`,
          headers: {
            'cache-control': 'no-cache',
            'Content-Type': 'application/json',
            Authorization: clientCredentials.getAuthHeaderValue(),
            Accept: 'application/json'
          },
          json: true
        },
        function (err, resp, body) {
          if (err) {
            reject(err)
          } else {
            resolve(resp, body)
          }
        }
      )
    })
  }

  //* *************USE THIS**********************/
  async requestCheckStatus (permissionNumber) {
    // get get status from the RCR activities table in

    // Calling request to return a promise so that it will use the returning values and form the rest of the assertions/actions
    var result = await this.fetchCrmNotifyStatus(permissionNumber)
    console.log(JSON.stringify(result, null, 2))
  }
}

module.exports = new GetCRMNotify()
module.exports.requestCheckStatus('my permission no')
