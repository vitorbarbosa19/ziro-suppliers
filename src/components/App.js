import React, { Component } from 'react'
import { stateMachine } from './utils/stateMachine'
import { authSession, handleAuth, checkAuth, profile } from './utils/auth'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthLogin from './routes/AuthLogin'
import AuthCallback from './routes/AuthCallback'
import ProductCreate from './routes/ProductCreate'
import ProductManage from './routes/ProductManage'
import NotFound from './routes/NotFound'
import Navbar from './Navbar/index'
import Footer from './Footer/index'
import { container, content } from './styles'

export default class App extends Component {
	state = {
		uiState: stateMachine.initialState,
		isAuthenticated: checkAuth() === 'authenticated',
		errorOnAuth: false,
		errorOnSilentAuth: false,
		userName: '',
		userCnpj: ''
	}
	componentDidMount() {
		if (this.props.location.pathname === '/callback') {
			handleAuth( (error, authResult) => {
				if (!error && authResult && authResult.accessToken && authResult.idToken) {
					localStorage.setItem('access', authResult.accessToken)
					localStorage.setItem('id', authResult.idToken)
					localStorage.setItem('expiry', authResult.expiresIn*1000 + new Date().getTime())
					const userName = authResult.idTokenPayload['http://name']
					const userCnpj = authResult.idTokenPayload['http://cnpj']
					this.setState({ isAuthenticated: true, userName, userCnpj })
					this.props.history.push('/')
				} else {
					this.setState({ errorOnAuth: true })
					console.log('Error during authentication.', error)
				}
			})
		}
		if (this.state.isAuthenticated && this.props.location.pathname !== '/callback') {
			// if session is still valid, grab a renewed access token and save it to local storage
			authSession( (error, authResult) => {
				if (!error && authResult && authResult.accessToken && authResult.idToken) {
					localStorage.setItem('access', authResult.accessToken)
					localStorage.setItem('id', authResult.idToken)
					localStorage.setItem('expiry', authResult.expiresIn*1000 + new Date().getTime())
				} else {
					this.setState({ errorOnSilentAuth: true })
					console.log('Error during silent authentication. Access token not renewed.', error)
				}
			})
			// if user is authenticated, grab profile information
			profile(localStorage.getItem('access'), (error, profile) => {
				if (!error) {
					const userName = profile['http://name']
					const userCnpj = profile['http://cnpj']
					this.setState({ userName, userCnpj })
				} else {
					console.log('Error fetching profile information.', error)
				}
			})
		}
	}
	changeUiState = stateMachine.changeUiState(this)
	logout = () => this.setState({ isAuthenticated: false })
	render() {
		const isAuthenticated = this.state.isAuthenticated
		return (
			<div style={container}>
				<Route render={ (props) =>
					<Navbar isAuthenticated={this.state.isAuthenticated} userName={this.state.userName} userCnpj={this.state.userCnpj} updateParent={this.logout} {...props} />}
				/>
					<div style={content}>
						<Switch>
							<Route exact path='/' render={() => isAuthenticated ? <Redirect to='/cadastrar' /> : <Redirect to='/login' />} />
							<Route path='/login' render={() => isAuthenticated ? <Redirect to='/cadastrar' /> : <AuthLogin uiState={this.state.uiState} changeUiState={this.changeUiState} />} />
							<Route path='/callback' render={() => <AuthCallback errorOnAuth={this.state.errorOnAuth} />} />
							<Route path='/cadastrar' render={() => isAuthenticated ? <ProductCreate userName={this.state.userName} uiState={this.state.uiState} changeUiState={this.changeUiState} /> : <Redirect to='/login' />} />
							<Route path='/gerenciar' render={() => isAuthenticated ? <ProductManage /> : <Redirect to='/login' />} />
							<Route path={null} component={NotFound} />
						</Switch>
					</div>		
				<Footer />
			</div>
		)
	}
}
