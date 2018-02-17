import React, { Component } from 'react'
import { Image } from 'cloudinary-react'
import SvgUser from './icons/SvgUser'
import SvgPass from './icons/SvgPass'
import { box, container, title, info, field, icon, input, submit } from './styles'

export default class Login extends Component {
	render() {
		return(
			<div style={box}>
				<div style={container}>
					<Image
						style={{marginTop: '90px'}}
			      cloudName='ziro'
			      width={window.innerWidth > 500 ? '160' : '100'}
			      publicId='icon-login_ep7dtu'
			      version='1518827830'
			      format='png'
			      secure='true'
		   		/>
					<span style={title}>Gerenciador de Estoque</span>
					<span style={info}>
						Faça login para ter acesso ao gerenciador de estoque
					</span>
					<div style={field}>
						<div style={icon}>
							<SvgUser
								width={20}
								height={20}
								color={'rgba(48,62,77,0.50)'}
							/>
						</div>
						<input style={input} type='email' placeholder='Email' />
					</div>
					<div style={field}>
						<div style={icon}>
							<SvgPass
								width={20}
								height={20}
								color={'rgba(48,62,77,0.50)'}
							/>
						</div>
						<input style={input} type='password' placeholder='Senha' />
					</div>
					<button style={submit}>Login</button>
				</div>
			</div>
		)
	}
}