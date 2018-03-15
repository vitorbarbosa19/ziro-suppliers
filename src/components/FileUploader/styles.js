export const title = {
	margin: '10px 0',
	textAlign: 'center',
	fontFamily: 'Hind Vadodara',
	fontSize: window.innerWidth > 500 ? '2.4rem' : '2.1rem',
	textTransform: 'uppercase',
	color: 'rgba(48,62,77,0.80)'
}

export const dropZone = {
	margin: window.innerWidth > 800 ? '0 auto' : '10% 10%',
	maxWidth: '600px',
	width: '80%',
	height: window.innerWidth > 1500 ? '550px' : window.innerWidth > 500 ? '500px' : '400px',
	padding: window.innerWidth > 500 ? '0px 75px' : '0px 30px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	fontFamily: 'Work Sans',
	fontSize: window.innerWidth > 500 ? '1.6rem' : '1.5rem',
	textAlign: 'center',
	color: 'rgba(48,62,77,0.80)',
	border: '4px dashed rgba(48,62,77,0.10)',
	borderRadius: window.innerWidth > 500 ? '50px' : '30px',
	boxShadow: `0 0 0 1px white, 2px 2px 8px 2px rgba(48,62,77,0.10), 4px 4px 10px 4px rgba(48,62,77,0.05)`
}

export const dropPopup = {
	position: 'absolute',
	top: '0',
	width: '100%',
	height: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: 'rgba(48,62,77,0.4)'
}

export const drop = Object.assign({}, dropZone, {
	backgroundColor: '#FFF'
})

export const release = {
	padding: '10px',
	textTransform: 'uppercase',
	fontWeight: '700'
}

export const input = {
	display: 'none'
}

export const success = {
	display: 'flex',
	flexDirection: window.innerWidth > 500 ? 'row' : 'column',
	alignItems: 'center',
	maxWidth: window.innerWidth > 500 ? '300px' : '250px',
	margin: '30px 0',
	fontFamily: 'Work Sans',
	fontSize: window.innerWidth > 500 ? '1.6rem' : '1.5rem',
	color: '#BFE491',
	textAlign: 'center'
}

export const error = {
	display: 'flex',
	flexDirection: window.innerWidth > 500 ? 'row' : 'column',
	alignItems: 'center',
	maxWidth: '300px',
	margin: '20px 0 0',
	fontFamily: 'Work Sans',
	fontSize: window.innerWidth > 500 ? '1.6rem' : '1.5rem',
	color: '#F16B6F',
	textAlign: 'center'
}
