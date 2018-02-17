import React, { Component } from 'react'
import { Image } from 'cloudinary-react'
import auth from './auth'
import { container, illustration, title, info, submit } from './styles'

export default class Login extends Component {
	login = () => {
		const authLogin = new auth()
		authLogin.login()
	}
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
				<button style={submit} onClick={this.login}>Login</button>
			</div>
		)
	}
}