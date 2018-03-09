import auth0 from 'auth0-js'

const auth = new auth0.WebAuth({
	domain: process.env.AUTH_DOMAIN,
  clientID: process.env.AUTH_ID,
  redirectUri: process.env.AUTH_REDIRECT,
  audience: process.env.AUTH_AUDIENCE,
  responseType: 'token id_token',
  scope: 'openid, profile'
})

export const handleLogin = () => auth.authorize()
export const handleAuth = (handler) => auth.parseHash(handler)
export const checkAuth = () => localStorage.getItem('expiry') > new Date().getTime() ? 'authenticated' : null
export const authSession = (callback) => auth.checkSession({}, callback)
export const signup = (userData, callback) => auth.signup(userData, callback)
export const profile = (accessToken, callback) => auth.client.userInfo(accessToken, callback)