const moment = require('moment')
const oauth2 = require('simple-oauth2')

class TokenManager {
  constructor () {
    this._authenticator = oauth2.create({
      client: {
        id: process.env['OAUTH_CLIENT_ID'],
        secret: process.env['OAUTH_CLIENT_SECRET']
      },
      auth: {
        tokenHost: process.env['OAUTH_TOKEN_ISSUER'],
        tokenPath: '/oauth2/v2.0/token',
        authorizePath: '/oauth2/v2.0/authorize'
      }
    })
    this._tokenRequestCfg = {
      scope: process.env['oauth_scope']
    }
    this._cachedToken = null
  }

  _needNewToken () {
    return !this._cachedToken || moment().isAfter(this._cachedToken.earlyExpiryMoment)
  }

  async updateNow () {
    const result = await this._authenticator.clientCredentials.getToken(this._tokenRequestCfg)
    const newToken = this._authenticator.accessToken.create(result).token
    newToken.earlyExpiryMoment = moment(newToken.expires_at).subtract(30, 'seconds')
    this._cachedToken = newToken
  }

  async getToken () {
    if (this._needNewToken()) {
      await this.updateNow()
    }
    return this._cachedToken
  }

  async getAuthHeaderValue () {
    const token = await this.getToken()
    return `Bearer ${token['access_token']}`
  }
}
module.exports = new TokenManager()
