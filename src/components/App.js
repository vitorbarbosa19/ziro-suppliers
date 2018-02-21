import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthLogin from './routes/AuthLogin'
import AuthCallback from './routes/AuthCallback'
import ProductCreate from './routes/ProductCreate'
import ProductManage from './routes/ProductManage'
import NotFound from './routes/NotFound'
import Navbar from './Navbar/index'
import Footer from './Footer/index'
import { authSession, handleAuth, checkAuth } from './Login/auth'
import { container, content } from './styles'

export default class App extends Component {
	state = {
		isAuthenticated: checkAuth() === 'authenticated',
		errorOnAuth: false,
		errorOnSilentAuth: false
	}
	componentDidMount() {
		if (this.props.location.pathname === '/callback') {
			handleAuth( (error, authResult) => {
				if (!error && authResult && authResult.accessToken && authResult.idToken) {
					localStorage.setItem('access', authResult.accessToken)
					localStorage.setItem('id', authResult.idToken)
					localStorage.setItem('expiry', authResult.expiresIn*1000 + new Date().getTime())
					this.setState({ isAuthenticated: true })
					this.props.history.push('/')
				} else {
					this.setState({ errorOnAuth: true })
					console.log('Error during authentication.', error)
				}
			})
		}
		// if session is still valid, grab a renewed access token and save it to local storage
		if (this.state.isAuthenticated && this.props.location.pathname !== '/callback') {
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
		}
	}
	logout = () => this.setState({ isAuthenticated: false })
	render() {
		const isAuthenticated = this.state.isAuthenticated
		return (
			<div style={container}>
				<Route render={ (props) =>
					<Navbar isAuthenticated={this.state.isAuthenticated} updateParent={this.logout} {...props} />}
				/>
					<div style={content}>
						<Switch>
							<Route exact path='/' render={() => isAuthenticated ? <Redirect to='/cadastrar' /> : <Redirect to='/login' />} />
							<Route path='/login' render={() => isAuthenticated ? <Redirect to='/cadastrar' /> : <AuthLogin />} />
							<Route path='/callback' render={() => <AuthCallback errorOnAuth={this.state.errorOnAuth} />} />
							<Route path='/cadastrar' render={() => isAuthenticated ? <ProductCreate /> : <Redirect to='/login' />} />
							<Route path='/gerenciar' render={() => isAuthenticated ? <ProductManage /> : <Redirect to='/login' />} />
							<Route path={null} component={NotFound} />
						</Switch>
					</div>		
				<Footer />
			</div>
		)
	}
}
