import React, { Component } from 'react'
import { Image } from 'cloudinary-react'
import SvgUser from './icons/SvgUser'
import SvgPass from './icons/SvgPass'
import { container, title, info, field, icon, input, submit } from './styles'

export default class Login extends Component {
	render() {
		return(
			<div style={container}>
				<Image
					style={{marginTop: '90px'}}
		      cloudName='ziro'
		      width={window.innerWidth > 500 ? '120' : '100'}
		      publicId='upload_s0ku2z'
		      version='1518371844'
		      format='png'
		      secure='true'
	   		/>
				<span style={title}>Gerenciador de Estoque</span>
				<span style={info}>
					Faça login para ter acesso ao gerenciador de estoque.
				</span>
				<div style={field}>
					<div style={icon}>
						<SvgUser
							width={18}
							height={18}
							color={'rgba(48,62,77,0.50)'}
						/>
					</div>
					<input style={input} type='email' />
				</div>
				<div style={field}>
					<div style={icon}>
						<SvgPass
							width={18}
							height={18}
							color={'rgba(48,62,77,0.50)'}
						/>
					</div>
					<input style={input} type='password' />
				</div>
				<button style={submit}>Login</button>
			</div>
		)
	}
}