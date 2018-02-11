import React, { Component } from 'react'
import { Image } from 'cloudinary-react'
import { nav } from './styles'

export default class Navbar extends Component {
	render() {
		return (
			<div style={nav}>
				<Image
		      cloudName='ziro'
		      width='25'
		      height='25'
		      publicId='hamburguer-menu_emfhuo'
		      version='1518314644'
		      format='png'
		      secure='true'
		   	/>
			</div>
		)
	}
}