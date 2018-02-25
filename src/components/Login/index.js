import React, { Component } from 'react'
import { Image } from 'cloudinary-react'
import { verifyCnpj } from './utils/verifyCnpj'
import { formatCnpj } from './utils/formatCnpj'
import { parseCnpj } from './utils/parseCnpj'
import { handleLogin } from '../utils/auth'
import SvgAlert from './icons/SvgAlert'
import SvgUser from './icons/SvgUser'
import SvgPass from './icons/SvgPass'
import SvgWhats from './icons/SvgWhats'
import SvgHome from './icons/SvgHome'
import SvgSpinner from './icons/SvgSpinner'
import { outerContainer, innerContainer, illustration, info, submit, submitOnHover,
	tabs, tab, tabActive, tabContent, input, field, icon, spinner, contact, error, uiError } from './styles'

export default class Login extends Component {
	state = {
		cnpj: '',
		errorCnpj: '',
		cnpjIsInvalid: false,
		isManufacturer: false,
		buttonIsHovered: false,
		tabOneIsActive: true,
		tabTwoIsActive: false
	}
	/* lifecycle methods */
	componentWillReceiveProps = () => { this.setState({ buttonIsHovered: false }) }
	/* other methods */
	verifyCnpj = verifyCnpj(this)
	updateCnpj = (event) => { this.setState({ cnpj: parseCnpj(event.target.value) }) }
	buttonHoverIn = () => { this.setState({ buttonIsHovered: true }) }
	buttonHoverOut = () => { this.setState({ buttonIsHovered: false }) }
	toggleTabOne = () => { this.setState({ tabOneIsActive: true, tabTwoIsActive: false }) }
	toggleTabTwo = () => { this.setState({ tabOneIsActive: false, tabTwoIsActive: true }) }
	goBack = () => { this.setState({ cnpj: '', errorCnpj: '', cnpjIsInvalid: false, isManufacturer: false }) }
	render() {
		return(
			<div style={outerContainer}>
				{ this.props.uiState === 'verifying_cnpj_error' ?
					<div style={uiError}>
						<SvgAlert width={'50'} height={'50'} />
						<span style={info}>
							Ocorreu um erro interno no sistema. Tente novamente mais tarde.
						</span>
					</div>
				:
					<div style={innerContainer}>
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
									this.state.isManufacturer ?
										<div style={tabContent}>
											<Image
												style={illustration}
									      cloudName='ziro'
									      width={window.innerWidth > 500 ? '50' : '40'}
									      publicId='ok-icon_bskbxm'
									      version='1508212647'
									      format='png'
									      secure='true'
								   		/>
											<span style={info}>
												Seu CNPJ de atacadista foi validado com sucesso!
												<br />
												Conclua seu cadastro preenchendo os campos abaixo
											</span>
											<div style={field}>
												<div style={icon}>
													<SvgUser
														width={20}
														height={20}
														color={'rgba(48,62,77,0.80)'}
													/>
												</div>
												<input
													style={input}
													type='email'
													placeholder='Email'
													// onChange={this.updateCnpj}
													// value={formatCnpj(this.state.cnpj)}
												/>
											</div>
											<div style={field}>
												<div style={icon}>
													<SvgPass
														width={20}
														height={20}
														color={'rgba(48,62,77,0.80)'}
													/>
												</div>
												<input
													style={input}
													type='password'
													placeholder='Senha'
													// onChange={this.updateCnpj}
													// value={formatCnpj(this.state.cnpj)}
												/>
											</div>
											<button
												style={this.state.buttonIsHovered ? submitOnHover : submit}
												// onClick={this.verifyCnpj}
												onMouseEnter={this.buttonHoverIn}
												onMouseLeave={this.buttonHoverOut}
											>
												Finalizar cadastro
											</button>
										</div>
									:
										this.state.cnpjIsInvalid ?
											<div style={tabContent}>
												<span style={illustration} />
												<SvgAlert width={'50'} height={'50'} />
												<span style={info}>
													CNPJ inválido ou com ramo de atividade incorreto.
													<br />
													Se acredita que houve um engano, entre em contato conosco.
													<br />
													<div style={contact}>
														<SvgWhats width={'20'} height={'20'} color={'rgba(48,62,77,0.50)'} />
														<span>&nbsp;(11)98176-8088</span>
													</div>
												</span>
												<button
													style={this.state.buttonIsHovered ? submitOnHover : submit}
													onClick={this.goBack}
													onMouseEnter={this.buttonHoverIn}
													onMouseLeave={this.buttonHoverOut}
												>
													Retornar
												</button>
											</div>
										:
											<div style={tabContent}>
												<Image
													style={illustration}
										      cloudName='ziro'
										      width={window.innerWidth > 500 ? '160' : '100'}
										      publicId='icon-register_ep7dtu_hpujvo'
										      version='1519495593'
										      format='png'
										      secure='true'
									   		/>
												<span style={info}>Iremos verificar a validade do seu CNPJ de atacadista</span>
												<div style={field}>
													<div style={icon}>
														<SvgHome
															width={20}
															height={20}
															color={'rgba(48,62,77,0.80)'}
														/>
													</div>
													<input
														style={input}
														type='text'
														placeholder='CNPJ'
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
												<span style={error}>
													{this.state.errorCnpj ? <SvgAlert width={'20'} height={'20'} /> : null}&nbsp;{this.state.errorCnpj}
												</span>
											</div>
						}					
					</div>
				}
			</div>
		)
	}
}