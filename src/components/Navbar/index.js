import React, { Component } from 'react'
import { Image } from 'cloudinary-react'
import Menu from './Menu'
import { nav } from './styles'

export default class Navbar extends Component {
	state = {
		menuIsOpen: false
	}
	openMenu = () => {
		this.setState({ menuIsOpen: true })
	}
	closeMenu = () => {
		this.setState({ menuIsOpen: false })
	}
	render() {
		return (
			<div style={nav}>
				<Image
		      cloudName='ziro'
		      width={window.innerWidth > 500 ? '25' : '20'}
		      publicId='hamburguer-menu_emfhuo'
		      version='1518314644'
		      format='png'
		      secure='true'
		      onClick={this.openMenu}
		      style={{cursor: 'pointer'}}
		   	/>
		   	<Menu 
		   		menuIsOpen={this.state.menuIsOpen}
		   		closeMenu={this.closeMenu}
		   	/>
			</div>
		)
	}
}