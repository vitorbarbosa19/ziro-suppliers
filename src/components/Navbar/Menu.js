import React from 'react'
import { Image } from 'cloudinary-react'
import SvgClose from './SvgClose'
import SvgUser from './SvgUser'
import SvgBox from './SvgBox'
import SvgNew from './SvgNew'

import { items, close, profile, username, logout, bar, item, label } from './styles'

const Menu = (props) => (
	<div style={props.menuIsOpen ? items(0) : items(-500)}>
		<div style={close}>
			<span
				style={{cursor: 'pointer'}}
				onClick={props.closeMenu}>
					{SvgClose(21,21,'rgba(48,62,77,0.80)')}
			</span>
		</div>
		<div style={profile}>
			{SvgUser(32,32,'rgba(48,62,77,0.80)')}
			<span style={username}>Nua Duza</span>
			<span>11.222.333/0001-44</span>
			<button style={logout}>Logout</button>
		</div>
		<hr style={bar} />
		<div style={item}>
			{SvgNew(18,18,'rgba(48,62,77,0.80)')}
			<span style={label}>Cadastrar produtos</span>
		</div>
		<div style={item}>
			{SvgBox(18,18,'rgba(48,62,77,0.80)')}
			<span style={label}>Gerenciar produtos</span>
		</div>
	</div>
)

export default Menu
