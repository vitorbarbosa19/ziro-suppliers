import React from 'react'
import SvgAlert from '../Login/icons/SvgAlert'

const container = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center'
}

const message = {
	maxWidth: '300px',
	margin: '30px auto',
	fontFamily: 'Work Sans',
	fontSize: '1.6rem',
	color: 'rgba(48,62,77,0.60)',
	textAlign: 'center'	
}

const NotFound = () => (
	<div style={container}>
		<SvgAlert width={'50'} height={'50'} />
		<div style={message}>Essa página não existe. Verifique a URL digitada.</div>
	</div>
)

export default NotFound
