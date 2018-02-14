import React, { Component } from 'react'
import Menu from './Menu'
import SvgMenu from './SvgMenu'
import { nav } from './styles'

export default class Navbar extends Component {
	state = { menuIsOpen: false }
	openMenu = () => this.setState({ menuIsOpen: true })
	closeMenu = () => this.setState({ menuIsOpen: false })
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
		   	<Menu 
		   		menuIsOpen={this.state.menuIsOpen}
		   		closeMenu={this.closeMenu}
		   	/>
			</div>
		)
	}
}