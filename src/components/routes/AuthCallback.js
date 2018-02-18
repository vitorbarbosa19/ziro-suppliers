import React from 'react'
import Callback from '../Login/Callback'

const AuthCallback = ({ location }) => ( <Callback hash={location.hash} /> )

export default AuthCallback
