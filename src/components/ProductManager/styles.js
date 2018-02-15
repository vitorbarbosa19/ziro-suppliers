export const manager = {
	padding: '60px 40px',
	fontFamily: 'Work Sans',
	fontSize: '1.5rem',
	color: 'rgba(48,62,77,0.80)',
}

export const title = {
	margin: '10px 0',
	textAlign: 'center',
	fontFamily: 'Hind Vadodara',
	fontSize: '2.4rem',
	textTransform: 'uppercase',
	color: 'rgba(48,62,77,0.80)'
}

export const product = {
	display: 'grid',
	gridTemplate: `
		'image referencia preco descricao' 1fr
		'image estoque estoque estoque' 2fr
		/ 200px 1fr 1fr 4fr`,
	gridGap: '0 40px',
	margin: '0 auto',
	width: '50%',
	padding: '40px',
	borderRadius: '6px',
	boxShadow: `2px 2px 8px 2px rgba(48,62,77,0.10), 4px 4px 10px 4px rgba(48,62,77,0.05)`
}

export const info = (fieldName) => {
	return {
		gridArea: fieldName,
		display: 'flex',
		flexDirection: 'column',
	}
}

export const label = {
	display: 'flex',
	alignItems: 'center',
	fontFamily: 'Hind Vadodara',
	textTransform: 'uppercase',
	fontSize: '1.5rem'
}

export const grid = {
	borderTop: '1px solid rgba(48,62,77,0.80)',
	marginTop: '3px',
	paddingTop: '10px',
	display: 'grid',
	gridTemplate: `
		'c0 pp p m g gg xg u'
		'c1 1-1 1-2 1-3 1-4 1-5 1-6 1-7'
		'c2 2-1 2-2 2-3 2-4 2-5 2-6 2-7'
		'c3 3-1 3-2 3-3 3-4 3-5 3-6 3-7'
		/ 16% 12% 12% 12% 12% 12% 12% 12%`,
	gridGap: '10px 0',
	color: 'rgba(48,62,77,0.8)'
}

export const input = {
	width: '100%',
	border: 'none',
	outline: 'none',
	fontSize: '1.5rem',
	color: 'rgba(48,62,77,0.5)'
}

export const stock = {
	width: '25px',
	border: 'none',
	outline: 'none',
	fontSize: '1.5rem',
	color: 'rgba(48,62,77,0.5)'	
}

export const color = {
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	outline: 'none',
	cursor: 'pointer',
	width: '100%',
	border: '1px solid rgba(48,62,77,0.80)',
	borderRadius: '20px',
	fontSize: '1.3rem',
	fontFamily: 'Work Sans',
	color: '#FFF',
	backgroundColor: 'rgba(48,62,77,0.80)',
	boxShadow: `0px 3px 10px 0px rgba(48,62,77,0.10), 0px 4px 12px 0px rgba(48,62,77,0.05)`,	
}

export const save = {
	margin: '20px 5px 60px',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	outline: 'none',
	cursor: 'pointer',
	width: '12%',
	border: '1px solid rgba(48,62,77,0.80)',
	borderRadius: '20px',
	padding: '7px 0px',
	fontSize: '1.3rem',
	fontFamily: 'Work Sans',
	color: '#FFF',
	backgroundColor: 'rgba(48,62,77,0.80)',
	boxShadow: `0px 3px 10px 0px rgba(48,62,77,0.10), 0px 4px 12px 0px rgba(48,62,77,0.05)`,
}

export const remove = {
	margin: '20px 5px 60px',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	outline: 'none',
	cursor: 'pointer',
	width: '12%',
	border: '1px solid #F16B6F',
	borderRadius: '20px',
	padding: '7px 0px',
	fontSize: '1.3rem',
	fontFamily: 'Work Sans',
	color: '#FFF',
	backgroundColor: '#F16B6F',
	boxShadow: `0px 3px 10px 0px rgba(48,62,77,0.10), 0px 4px 12px 0px rgba(48,62,77,0.05)`,
}
