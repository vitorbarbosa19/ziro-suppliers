import React from 'react'
import Callback from '../Login/Callback'

const AuthCallback = ({ history }) => ( <Callback hash={history.location.hash} push={history.push} /> )

export default AuthCallback
