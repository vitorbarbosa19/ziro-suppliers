import React from 'react'
import Callback from '../Login/Callback'

const AuthCallback = ({ history }) => (
	<Callback hash={history.location.hash} redirectTo={history.push} />
)

export default AuthCallback
