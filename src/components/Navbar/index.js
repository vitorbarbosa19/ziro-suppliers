import React, { Component } from 'react'
import Menu from './Menu'
import Search from './Search'
import SvgMenu from './icons/SvgMenu'
import { nav } from './styles'

export default class Navbar extends Component {
	state = { menuIsOpen: false }
	openMenu = () => this.setState({ menuIsOpen: true })
	closeMenu = () => this.setState({ menuIsOpen: false })
	navigate = (route) => {
		this.setState({ menuIsOpen: false })
		this.props.history.push(route)
	}
	logout = () => {
		localStorage.removeItem('access')
		localStorage.removeItem('id')
		localStorage.removeItem('expiry')
		this.setState({ menuIsOpen: false })
		this.props.history.push('/login')
		this.props.updateParent()
	}
	render() {
		return (
			<div style={nav}>
				<SvgMenu
					width={24}
					height={24}
					color={'#FFF'}
					onClick={this.openMenu}
					cursor={true}
				/>
				{this.props.history.location.pathname === '/gerenciar' && <Search />}
		   	<Menu
		   		isAuthenticated={this.props.isAuthenticated}
		   		menuIsOpen={this.state.menuIsOpen}
		   		closeMenu={this.closeMenu}
		   		navigate={this.navigate}
		   		logout={this.logout}
		   	/>
			</div>
		)
	}
}