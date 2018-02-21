import React, { Component } from 'react'
import { Image } from 'cloudinary-react'
import { handleLogin } from './auth'
import { container, illustration, title, info, submit, submitOnHover } from './styles'

export default class Login extends Component {
	state = {
		buttonIsHovered: false
	}
	buttonHoverIn = () => { this.setState({ buttonIsHovered: true }) }
	buttonHoverOut = () => { this.setState({ buttonIsHovered: false }) }
	render() {
		return(
			<div style={container}>
				<Image
					style={illustration}
		      cloudName='ziro'
		      width={window.innerWidth > 500 ? '160' : '100'}
		      publicId='icon-login_ep7dtu'
		      version='1518827830'
		      format='png'
		      secure='true'
	   		/>
				<span style={title}>Gerenciador de Estoque</span>
				<span style={info}>Faça login para ter acesso ao gerenciador de estoque</span>
				<button
					style={this.state.buttonIsHovered ? submitOnHover : submit}
					onClick={handleLogin}
					onMouseEnter={this.buttonHoverIn}
					onMouseLeave={this.buttonHoverOut}
				>
					Login
				</button>
			</div>
		)
	}
}