import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Webfont from 'webfontloader'
import App from './components/App'
import './index.css'
import '../_redirects'

Webfont.load({ google: { families: [
	'Work Sans: 300,400,700',
	'Hind Vadodara: 300,400,700'
]}})

render( <Router><Route component={App} /></Router>, document.getElementById('app') )