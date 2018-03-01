import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import Webfont from 'webfontloader'
import App from './components/App'
import './index.css'
import '../_redirects'

Webfont.load({ google: { families: [
	'Work Sans: 300,400,700',
	'Hind Vadodara: 300,400,700'
]}})

const client = new ApolloClient({
	link: new HttpLink({ uri: process.env.GRAPHQL_ENDPOINT }),
	cache: new InMemoryCache()
})

render(
	<ApolloProvider client={client}>
		<Router>
			<Route component={App} />
		</Router>
	</ApolloProvider>,
	document.getElementById('app')
)