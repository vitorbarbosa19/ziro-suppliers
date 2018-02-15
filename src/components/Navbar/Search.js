import React from 'react'
import SvgSearch from './icons/SvgSearch'
import { search } from './styles'

const Search = () => (
	<div style={{display: 'flex', margin: '0 auto', justifyContent: 'center', position: 'relative'}}>
		<input style={search} type='text' />
		<div style={{position: 'absolute', top: '6px', right: '20px'}}>
			<SvgSearch
				width={15}
				height={15}
				color={'rgba(48,62,77,0.80)'}
			/>
		</div>
	</div>
)

export default Search
