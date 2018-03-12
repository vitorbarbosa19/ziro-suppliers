import React, { Component } from 'react'
import { withApollo } from 'react-apollo'
import loadCSV from './utils/loadCSV'
import loadImage from './utils/loadImage'
import { Image } from 'cloudinary-react'
import { dropZone, title, uploadOnHover, upload } from './styles'

class FileUploader extends Component {
	state = {
		buttonIsHovered: false
	}
	handleFile = () => {
		[...this.uploadButton.files].map( (file) => {
			if (/^text\/csv$/.test(file.type)) {
				const reader = new FileReader()
				reader.onload = loadCSV(this).bind(null, reader)
				reader.readAsText(file)
			}
			if (/^image\/(png|jpeg)$/.test(file.type)) {
				const reader = new FileReader()
				reader.onload = loadImage(this).bind(null, reader.result)
				reader.readAsDataURL(file)
			}
		})
	}
	clickInput = () => { this.uploadButton.click() }
	buttonHoverIn = () => { this.setState({ buttonIsHovered: true }) }
	buttonHoverOut = () => { this.setState({ buttonIsHovered: false }) }
	render = () => (
		<div style={dropZone}>
			<p style={title}>Cadastro de produtos</p>
			<Image
	      cloudName='ziro'
	      width={window.innerWidth > 500 ? '120' : '90'}
	      publicId='upload_s0ku2z'
	      version='1518371844'
	      format='png'
	      secure='true'
   		/>
			<p>Arraste aqui um arquivo .CSV ou imagens</p>
			<input
				style={{display: 'none'}}
				type='file'
				onChange={this.handleFile}
				ref={input => this.uploadButton = input}
			/>
			<button
				style={this.state.buttonIsHovered ? uploadOnHover : upload}
				onMouseEnter={this.buttonHoverIn}
				onMouseLeave={this.buttonHoverOut}
				onClick={this.clickInput}
			>
				Procurar arquivo
			</button>
		</div>
	)
}

export default withApollo(FileUploader)
