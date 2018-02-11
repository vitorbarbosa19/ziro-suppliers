import React from 'react'
import Webfont from 'webfontloader'
import FileUploader from './FileUploader/index'
import Navbar from './Navbar/index'
import Footer from './Footer/index'
import { container, content } from './styles'

Webfont.load({ google: { families: [
	'Work Sans: 300,400,700',
	'Hind Vadodara: 300,400,700'
]}})

const App = () => (
	<div style={container}>
		<div style={content}>
			<Navbar />
			<FileUploader />
		</div>
		<Footer />
	</div>
)

export default App