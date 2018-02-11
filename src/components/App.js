import React from 'react'
import Webfont from 'webfontloader'
import FileUploader from './FileUploader/index'
import Navbar from './Navbar/index'
import { container } from './styles'

Webfont.load({ google: { families: [
	'Work Sans: 300,400,700',
	'Poppins: 300,400,700'
]}})

const App = () => (
	<div style={container}>
		<Navbar />
		<FileUploader />
	</div>
)

export default App