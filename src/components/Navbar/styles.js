export const nav = {
	padding: '20px 0',
	display: 'flex',
	justifyContent: 'left',
	alignItems: 'center'
}

export const items = (positionX) => { 
	return {
		position: 'fixed',
		left: positionX,
		top: '0',
		width: window.innerWidth > 500 ? '350px' : '100%',
		height: '100%',
		fontFamily: 'Work Sans',
		fontSize: '1.4rem',
		color: 'rgba(48,62,77,0.80)',
		backgroundColor: '#FFF',
		transition: '0.4s ease-in-out',
		boxShadow: `3px 0px 10px 0px rgba(48,62,77,0.10), 6px 0px 10px 0px rgba(48,62,77,0.05)`
	}
}

export const item = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '15px 0',
}

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
	fontSize: '1.2rem',
	fontFamily: 'Work Sans',
	color: '#FFF',
	backgroundColor: 'rgba(48,62,77,0.80)',
	boxShadow: `0px 3px 10px 0px rgba(48,62,77,0.10)`,	
}

export const bar = {
	width: '80%',
	marginBottom: '40px'
}

export const username = {
	marginTop: '15px',
	fontWeight: '700'
}
