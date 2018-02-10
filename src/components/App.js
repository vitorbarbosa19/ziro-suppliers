import React from 'react'
import Webfont from 'webfontloader'

Webfont.load({ google: { families: [
	'Work Sans: 300,400,700',
	'Poppins: 300,400,700'
]}})

const App = () => <div>Hello</div>

export default App