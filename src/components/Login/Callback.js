import React from 'react'
import SvgSpinner from './icons/SvgSpinner'
import parseHash from './parseHash'
import { loading, message } from './styles'

const Callback = (props) => {
	console.log(parseHash(props.hash))
	return (
		<div style={loading}>
			<SvgSpinner
				width={'50'}
				height={'50'}
			/>
			<span style={message}>
				Aguarde enquanto fazemos seu login...
			</span>
		</div>
	)
}

export default Callback
