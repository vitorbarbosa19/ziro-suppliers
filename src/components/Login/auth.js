import auth0 from 'auth0-js'

const auth = new auth0.WebAuth({
	domain: 'vitorbarbosa19.auth0.com',
  clientID: '3D2HVJk64okukb9NWaOubKzxiruXGT1z',
  redirectUri: 'http://localhost:8080/callback',
  audience: 'https://vitorbarbosa19.auth0.com/userinfo',
  responseType: 'token id_token',
  scope: 'openid'
})

export const authLogin = () => auth.authorize()
