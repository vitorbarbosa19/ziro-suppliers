import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NewProduct from './routes/NewProduct'
import ManageProducts from './routes/ManageProducts'
import Page404 from './routes/Page404'

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={NewProduct} />
			<Route path='/gerenciar' component={ManageProducts} />
			<Route component={Page404} />
		</Switch>
	</BrowserRouter>
)

export default App
