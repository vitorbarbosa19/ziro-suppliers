import React from 'react'
import Navbar from '../Navbar/index'
import FileUploader from '../FileUploader/index'
import Footer from '../Footer/index'
import { container, content } from '../styles'


const NewProduct = () => (
	<div style={container}>
		<div style={content}>
			<Navbar />
			<FileUploader />
		</div>
		<Footer />
	</div>
)

export default NewProduct
