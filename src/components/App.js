import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CreateProducts from './routes/CreateProducts'
import ManageProducts from './routes/ManageProducts'
import Page404 from './routes/Page404'
import Navbar from './Navbar/index'
import Footer from './Footer/index'
import { container, content } from './styles'

const App = () => (
	<BrowserRouter>
		<div style={container}>
			<Route component={Navbar} />
				<div style={{gridArea: 'content', alignSelf: 'center'}}>
					<Switch>
						<Route exact path='/' component={CreateProducts} />
						<Route path='/gerenciar' component={ManageProducts} />
						<Route component={Page404} />
					</Switch>
				</div>		
			<Footer />
		</div>
	</BrowserRouter>
)

export default App
