import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './routes/Home'
import AuthLogin from './routes/AuthLogin'
import AuthCallback from './routes/AuthCallback'
import ProductCreate from './routes/ProductCreate'
import ProductManage from './routes/ProductManage'
import NotFound from './routes/NotFound'
import Navbar from './Navbar/index'
import Footer from './Footer/index'
import { container, content } from './styles'

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div style={container}>
					<Route component={Navbar} />
						<div style={content}>
							<Switch>
								<Route exact path='/' render={() => <Home homepage='/cadastrar' />} />
								<Route path='/login' component={AuthLogin} />
								<Route path='/callback' component={AuthCallback} />
								<Route path='/cadastrar' component={ProductCreate} />
								<Route path='/gerenciar' component={ProductManage} />
								<Route component={NotFound} />
							</Switch>
						</div>		
					<Footer />
				</div>
			</BrowserRouter>
		)
	}
}
