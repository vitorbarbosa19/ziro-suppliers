import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthLogin from './routes/AuthLogin'
import AuthCallback from './routes/AuthCallback'
import ProductCreate from './routes/ProductCreate'
import ProductManage from './routes/ProductManage'
import NotFound from './routes/NotFound'
import Navbar from './Navbar/index'
import Footer from './Footer/index'
import { authSession, checkAuth } from './Login/auth'
import { container, content } from './styles'

export default class App extends Component {
	state = {
		isAuthenticated: checkAuth() === 'authenticated',
		errorOnSilentAuth: false
	}
	componentDidMount() {
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
	render() {
		const isAuthenticated = this.state.isAuthenticated
		return (
			<div style={container}>
				<Route component={Navbar} />
					<div style={content}>
						<Switch>
							<Route exact path='/' render={() => isAuthenticated ? <Redirect to='/cadastrar' /> : <Redirect to='/login' />} />
							<Route path='/login' component={AuthLogin} />
							<Route path='/callback' component={AuthCallback} />
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
