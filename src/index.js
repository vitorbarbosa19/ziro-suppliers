import React from 'react'
import { render } from 'react-dom'
import Webfont from 'webfontloader'
import App from './components/App'
import './index.css'
import '../_redirects'

Webfont.load({ google: { families: [
	'Work Sans: 300,400,700',
	'Hind Vadodara: 300,400,700'
]}})

render( <App />, document.getElementById('app') )