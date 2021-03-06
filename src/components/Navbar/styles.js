export const nav = {
	gridArea: 'navbar',
	display: 'flex',
	alignItems: 'center',
	paddingLeft: '25px',
	backgroundColor: 'rgba(48, 62, 77, 1)',
	boxShadow: `0px 3px 10px 0px rgba(48,62,77,0.10), 0px 6px 10px 0px rgba(48,62,77,0.05)`
}

export const items = (positionX) => { 
	return {
		position: 'fixed',
		zIndex: '1',
		left: positionX,
		top: '0',
		width: window.innerWidth > 500 ? '350px' : '100%',
		height: '100%',
		fontFamily: 'Work Sans',
		fontSize: '1.6rem',
		color: 'rgba(48,62,77,0.80)',
		backgroundColor: '#FFF',
		transition: '0.4s ease-in-out',
		boxShadow: `3px 0px 10px 0px rgba(48,62,77,0.10), 6px 0px 10px 0px rgba(48,62,77,0.05)`
	}
}

export const item = {
	display: 'flex',
	justifyContent: 'center',
	padding: '15px 0',
	cursor: 'pointer'
}

export const itemOnHover = Object.assign({}, item, {
	backgroundColor: 'rgba(48,62,77,0.10)'
})

export const label = {
	padding: '0 10px'
}

export const close = {
	display: 'flex',
	justifyContent: 'flex-end',
	alignItems: 'center',
	padding: '10px 10px 0 0'
}

export const profile = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: '25px 0 35px'

}

export const logout = {
	marginTop: '10px',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	outline: 'none',
	cursor: 'pointer',
	width: '50%',
	border: '1px solid rgba(48,62,77,0.80)',
	borderRadius: '20px',
	padding: '7px 0px',
	fontSize: '1.3rem',
	fontFamily: 'Work Sans',
	color: '#FFF',
	backgroundColor: 'rgba(48,62,77,0.80)',
	boxShadow: `0px 3px 10px 0px rgba(48,62,77,0.10)`,
	transition: '0.2s ease-in-out',
}

export const logoutOnHover = Object.assign({}, logout, {
	color: 'rgba(48,62,77,0.80)',
	backgroundColor: '#FFF',
	boxShadow: 'none',
	fontWeight: '700'
})

export const bar = {
	width: '80%',
	marginBottom: '40px'
}

export const username = {
	width: '250px',
	marginTop: '15px',
	fontFamily: 'Hind Vadodara',
	fontWeight: '700',
	textAlign: 'center',
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis'
}

export const search = {
	border: 'none',
	outline: 'none',
	borderRadius: '30px',
	padding: '5px 40px',
	textAlign: 'center',
	fontSize: '1.5rem',
	fontFamily: 'Work Sans',
	color: 'rgba(48,62,77,0.80)',
}

export const info = {
	width: '280px',
	margin: '30px auto 0px',
	fontFamily: 'Work Sans',
	fontSize: '1.6rem',
	color: 'rgba(48,62,77,0.60)',
	textAlign: 'center'
}

