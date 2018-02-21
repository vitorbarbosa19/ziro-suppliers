export const container = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	margin: '0 auto',
	width: '100%',
	maxWidth: '450px',
	height: '700px',
	borderRadius: '10px',
	boxShadow: `0px 0px 8px 2px rgba(48,62,77,0.10), 0px 0px 10px 4px rgba(48,62,77,0.05)`,
	backgroundColor: 'white'
}

export const illustration = {
	marginTop: '130px'
}

export const title = {
	margin: '30px 0 6px',
	fontFamily: 'Hind Vadodara',
	fontSize: '2.1rem',
	textTransform: 'uppercase',
	color: 'rgba(48,62,77,0.80)'
}

export const info = {
	maxWidth: '300px',
	margin: '0 0 30px',
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
	border: '1px solid rgba(48,62,77,0.80)',
	borderRadius: '20px',
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

