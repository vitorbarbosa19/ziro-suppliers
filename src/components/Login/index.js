import React, { Component } from 'react'
import { Image } from 'cloudinary-react'
import { verifyCnpj } from './utils/verifyCnpj'
import { formatCnpj } from './utils/formatCnpj'
import { parseCnpj } from './utils/parseCnpj'
import { handleLogin } from '../utils/auth'
import SvgUser from './icons/SvgUser'
import SvgSpinner from './icons/SvgSpinner'
import { container, illustration, info, submit, submitOnHover,
	tabs, tab, tabActive, tabContent, input, field, icon, spinner } from './styles'

export default class Login extends Component {
	state = {
		cnpj: '',
		cnpjIsInvalid: false,
		isManufacturer: false,
		buttonIsHovered: false,
		tabOneIsActive: true,
		tabTwoIsActive: false
	}

	componentWillReceiveProps() { this.setState({ buttonIsHovered: false }) }
	
	verifyCnpj = verifyCnpj(this)
	updateCnpj = (event) => { this.setState({ cnpj: parseCnpj(event.target.value) }) }
	buttonHoverIn = () => { this.setState({ buttonIsHovered: true }) }
	buttonHoverOut = () => { this.setState({ buttonIsHovered: false }) }
	toggleTabOne = () => { this.setState({ tabOneIsActive: true, tabTwoIsActive: false }) }
	toggleTabTwo = () => { this.setState({ tabOneIsActive: false, tabTwoIsActive: true }) } 
	render() {
		return(
			<div style={container}>
				<div style={tabs}>
					<div style={this.state.tabOneIsActive ? tabActive : tab} onClick={this.toggleTabOne}>
						Login
					</div>
					<div style={this.state.tabTwoIsActive ? tabActive : tab} onClick={this.toggleTabTwo}>
						Registrar
					</div>
				</div>
				{ this.state.tabOneIsActive ?
						<div style={tabContent}>
							<Image
								style={illustration}
					      cloudName='ziro'
					      width={window.innerWidth > 500 ? '160' : '100'}
					      publicId='icon-login_ep7dtu'
					      version='1518827830'
					      format='png'
					      secure='true'
				   		/>
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
					:

							this.props.uiState === 'verifying_cnpj' ?
								<div style={spinner}>
									<SvgSpinner
										width={50}
										height={50}
									/>
									<span style={info}>Aguarde enquanto verificamos seu CNPJ</span>
								</div>
							:
								<div style={tabContent}>
									<Image
										style={illustration}
							      cloudName='ziro'
							      width={window.innerWidth > 500 ? '160' : '100'}
							      publicId='icon-login_ep7dtu'
							      version='1518827830'
							      format='png'
							      secure='true'
						   		/>
									<span style={info}>Iremos verificar a validade do seu CNPJ de atacadista</span>
									<div style={field}>
										<div style={icon}>
											<SvgUser
												width={20}
												height={20}
												color={'rgba(48,62,77,0.50)'}
											/>
										</div>
										<input
											style={input}
											type='text'
											onChange={this.updateCnpj}
											value={formatCnpj(this.state.cnpj)}
										/>
									</div>
									<button
										style={this.state.buttonIsHovered ? submitOnHover : submit}
										onClick={this.verifyCnpj}
										onMouseEnter={this.buttonHoverIn}
										onMouseLeave={this.buttonHoverOut}
									>
										Verificar
									</button>
								</div>
			}
			</div>
		)
	}
}