import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'cloudinary-react'
import SvgClose from './icons/SvgClose'
import SvgUser from './icons/SvgUser'
import SvgBox from './icons/SvgBox'
import SvgNew from './icons/SvgNew'

import { items, close, profile, username, logout,
	logoutOnHover, bar, item, itemOnHover, label, info } from './styles'

export default class Menu extends Component {
	state = {
		routeOneIsHovered: false,
		routeTwoIsHovered: false,
		buttonIsHovered: false
	}
	routeHoverIn = (route) => { this.setState({ [`route${route}IsHovered`]: true }) }
	routeHoverOut = (route) => { this.setState({ [`route${route}IsHovered`]: false }) }
	buttonHoverIn = () => { this.setState({ buttonIsHovered: true }) }
	buttonHoverOut = () => { this.setState({ buttonIsHovered: false }) }
	render() {
		return (
			<div style={this.props.menuIsOpen ? items(0) : items(-500)}>
				<div style={close}>
					<SvgClose
						width={21}
						height={21}
						color={'rgba(48,62,77,0.80)'}
						onClick={this.props.closeMenu}
						cursor={true}
					/>
				</div>
				{
					this.props.isAuthenticated ?
						<div>
							<div style={profile}>
								<SvgUser
									width={32}
									height={32}
									color={'rgba(48,62,77,0.80)'}
								/>
								<span style={username}>Nua Duza</span>
								<span>11.222.333/0001-44</span>
								<button
									style={this.state.buttonIsHovered ? logoutOnHover : logout}
									onClick={this.props.logout}
									onMouseEnter={this.buttonHoverIn}
									onMouseLeave={this.buttonHoverOut}
								>
									Logout
								</button>
							</div>
							<hr style={bar} />
							<div
								style={this.state.routeOneIsHovered ? itemOnHover : item}
								onClick={this.props.navigate.bind(null, '/cadastrar')}
								onMouseEnter={this.routeHoverIn.bind(null, 'One')}
								onMouseLeave={this.routeHoverOut.bind(null, 'One')}
							>
								<SvgNew
									width={18}
									height={18}
									color={'rgba(48,62,77,0.80)'}
								/>
								<span style={label}>Cadastrar produtos</span>
							</div>
							<div
								style={this.state.routeTwoIsHovered ? itemOnHover : item}
								onClick={this.props.navigate.bind(null, '/gerenciar')}
								onMouseEnter={this.routeHoverIn.bind(null, 'Two')}
								onMouseLeave={this.routeHoverOut.bind(null, 'Two')}
							>
								<SvgBox
									width={18}
									height={18}
									color={'rgba(48,62,77,0.80)'}
								/>
								<span style={label}>Gerenciar produtos</span>
							</div>
						</div>
					:
						<div style={info}>
					    <Link to='/'>
						    <Image
						      cloudName='ziro'
						      width='45'
						      publicId='logo-round_kxn8sa'
						      version='1508000699'
						      format='png'
						      secure='true'
						    />
						  </Link>
							<p>
								O Gerenciador de Estoque é uma ferramenta que permite a você, atacadista, compartilhar
								conosco grade, fotos e estoque dos seus produtos.
							</p>
							<p>
								Dessa forma, podemos te ajudar a atrair novos
								clientes e aumentar suas vendas.
							</p>
							<hr style={bar} />
						</div>
				}
			</div>
		)
	}
}
