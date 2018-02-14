import React from 'react'
import { Link } from 'react-router-dom'
import SvgClose from './icons/SvgClose'
import SvgUser from './icons/SvgUser'
import SvgBox from './icons/SvgBox'
import SvgNew from './icons/SvgNew'

import { items, close, profile, username, logout, bar, item, label } from './styles'

const Menu = (props) => (
	<div style={props.menuIsOpen ? items(0) : items(-500)}>
		<div style={close}>
			<SvgClose
				width={21}
				height={21}
				color={'rgba(48,62,77,0.80)'}
				onClick={props.closeMenu}
				cursor={true}
			/>
		</div>
		<div style={profile}>
			<SvgUser
				width={32}
				height={32}
				color={'rgba(48,62,77,0.80)'}
			/>
			<span style={username}>Nua Duza</span>
			<span>11.222.333/0001-44</span>
			<button style={logout}>Logout</button>
		</div>
		<hr style={bar} />
		<div style={item}>
			<Link to='/'>
				<SvgNew
					width={18}
					height={18}
					color={'rgba(48,62,77,0.80)'}
					cursor={true}
				/>
				<span style={label}>Cadastrar produtos</span>
			</Link>
		</div>
		<div style={item}>
			<Link to='/gerenciar'>
				<SvgBox
					width={18}
					height={18}
					color={'rgba(48,62,77,0.80)'}
					cursor={true}
				/>
				<span style={label}>Gerenciar produtos</span>
			</Link>
		</div>
	</div>
)

export default Menu
