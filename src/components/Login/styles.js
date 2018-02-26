export const outerContainer = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	margin: '0 auto',
	maxWidth: '450px',
	height: '700px',
	borderRadius: '10px',
	boxShadow: `0px 2px 8px 2px rgba(48,62,77,0.10), 0px 4px 10px 0px rgba(48,62,77,0.05)`,
	backgroundColor: 'white',
	overflow: 'hidden'
}

export const innerContainer = {
	width: '100%',
	height: '100%'
}

export const illustration = {
	marginTop: '130px'
}

export const info = {
	maxWidth: '300px',
	margin: '30px 0',
	fontFamily: 'Work Sans',
	fontSize: '1.6rem',
	color: 'rgba(48,62,77,0.60)',
	textAlign: 'center'
}

export const submit = {
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	outline: 'none',
	cursor: 'pointer',
	width: '70%',
	border: '1px solid rgba(48,62,77,0.50)',
	borderRadius: '30px',
	padding: '10px 0px',
	fontSize: '1.6rem',
	fontFamily: 'Work Sans',
	color: '#FFF',
	backgroundColor: 'rgba(48,62,77,0.80)',
	boxShadow: `0px 3px 10px 0px rgba(48,62,77,0.20), 0px 4px 12px 0px rgba(48,62,77,0.10)`,
	transition: '0.2s ease-in-out'
}

export const submitOnHover = Object.assign({}, submit, {
	fontWeight: '700',
	color: 'rgba(48,62,77,0.80)',
	backgroundColor: '#FFF'
})

export const loading = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center'
}

export const message = {
	maxWidth: '300px',
	margin: '30px 0',
	fontFamily: 'Work Sans',
	fontSize: '1.6rem',
	color: 'rgba(48,62,77,0.60)',
	textAlign: 'center'	
}

export const tabs = {
	display: 'flex',
	width: '100%',
	height: '60px',
	fontFamily: 'Work Sans',
	fontSize: '1.6rem',
	color: 'rgba(48,62,77,0.60)',
	boxShadow: `0px 2px 10px 0px rgba(48,62,77,0.10), 0px 2px 15px 0px rgba(48,62,77,0.05)`,
}

export const tab = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100%',
	height: '100%',
	cursor: 'pointer',
	transition: '0.2s ease-in-out'
}

export const tabActive = Object.assign({}, tab, {
	color: '#FFF',
	backgroundColor: 'rgba(48,62,77,0.8)',
	boxShadow: `0px 2px 10px 2px rgba(48,62,77,0.10), 0px 2px 15px 4px rgba(48,62,77,0.05)`,
})

export const tabContent = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	width: '100%'
}

export const input = {
	width: '100%',
	marginBottom: '10px',
	border: '1px solid rgba(48,62,77,0.50)',
	outline: 'none',
	borderRadius: '30px',
	padding: '10px 0px',
	fontSize: '1.6rem',
	fontFamily: 'Work Sans',
	color: 'rgba(48,62,77,0.50)',
	textAlign: 'center',
	boxShadow: `0px 2px 10px 2px rgba(48,62,77,0.10), 0px 2px 15px 4px rgba(48,62,77,0.05)`,
}

export const field = {
	position: 'relative',
	width: '70%'
}

export const icon = {
	position: 'absolute',
	top: '9px',
	left: '20px'
}

export const spinner = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100%'
}

export const contact = {
	display: 'flex',
	justifyContent: 'center'
}

export const error = {
	display: 'flex',
	alignItems: 'center',
	maxWidth: '300px',
	margin: '20px 0 0',
	fontFamily: 'Work Sans',
	fontSize: '1.6rem',
	color: '#F16B6F',
	textAlign: 'center'
}

export const uiError = {
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center'
}

export const success = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	maxWidth: '300px',
	margin: '30px 0',
	fontFamily: 'Work Sans',
	fontSize: '1.6rem',
	color: '#BFE491',
	textAlign: 'center'
}
