export const manager = {
	padding: '60px 40px',
	fontFamily: 'Work Sans',
	fontSize: '1.6rem',
	color: 'rgba(48,62,77,0.80)',
}

export const product = {
	display: 'grid',
	gridTemplate: `
		'image referencia preco descricao' 1fr
		'image estoque estoque estoque' 2fr
		/ 200px 1fr 1fr 4fr`,
	gridGap: '0 20px',
	margin: '0 auto 60px',
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
	justifyItems: 'center',
	gridGap: '10px 0',
	color: 'rgba(48,62,77,0.4)'
}
