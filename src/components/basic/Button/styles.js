export const button = {
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	outline: 'none',
	cursor: 'pointer',
	width: '30%',
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

export const buttonOnHover  = Object.assign({}, button, {
	fontWeight: window.innerWidth > 500 ? '700' : '400',
	color: window.innerWidth > 500 ? 'rgba(48,62,77,0.80)' : '#FFF',
	backgroundColor: window.innerWidth > 500 ? '#FFF' : 'rgba(48,62,77,0.80)'
})
