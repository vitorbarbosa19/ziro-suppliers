import React from 'react'
import Callback from '../Login/Callback'

const AuthCallback = (props) => (
	<Callback errorOnAuth={props.errorOnAuth} />
)

export default AuthCallback
