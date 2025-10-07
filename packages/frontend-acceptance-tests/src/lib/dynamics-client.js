'use strict'

import DynamicsWebApi from 'dynamics-web-api'
import SimpleOAuth2 from 'simple-oauth2'

const PREEMPTIVE_TOKEN_EXPIRY_SECONDS = 60

const oauthClient = new SimpleOAuth2.ClientCredentials({
  client: {
    id: process.env.OAUTH_CLIENT_ID,
    secret: process.env.OAUTH_CLIENT_SECRET
  },
  auth: {
    tokenHost: process.env.OAUTH_AUTHORITY_HOST_URL,
    tokenPath: `${process.env.OAUTH_TENANT}/oauth2/v2.0/token`,
    authorizePath: `${process.env.OAUTH_TENANT}/oauth2/v2.0/authorize`
  },
  options: {
    authorizationMethod: 'body',
    bodyFormat: 'form'
  }
})

let accessToken = null

const dynamicsClient = new DynamicsWebApi({
  webApiUrl: process.env.DYNAMICS_API_PATH,
  webApiVersion: process.env.DYNAMICS_API_VERSION,
  timeout: process.env.DYNAMICS_API_TIMEOUT || 90000,
  onTokenRefresh: async dynamicsWebApiCallback => {
    if (!accessToken || accessToken.expired(PREEMPTIVE_TOKEN_EXPIRY_SECONDS)) {
      accessToken = await oauthClient.getToken({ scope: process.env.OAUTH_SCOPE })
    }
    dynamicsWebApiCallback(accessToken.token.access_token)
  }
})

export default dynamicsClient
