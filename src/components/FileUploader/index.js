import React, { Component } from 'react'
import { withApollo } from 'react-apollo'
import { Image } from 'cloudinary-react'
import handleFile from './utils/handleFile'
import { dropZone, title, uploadOnHover, upload } from './styles'

class FileUploader extends Component {
	state = {
		buttonIsHovered: false
	}
	handleFile = handleFile(this)
	onDrag = (event) => {
		event.stopPropagation()
		event.preventDefault()
	}
	onDrop = (event) => {
		event.stopPropagation()
		event.preventDefault()
		this.uploadButton.files = event.dataTransfer.files
	}
	clickInput = () => { this.uploadButton.click() }
	buttonHoverIn = () => { this.setState({ buttonIsHovered: true }) }
	buttonHoverOut = () => { this.setState({ buttonIsHovered: false }) }
	render = () => (
		<div style={dropZone} onDragEnter={this.onDrag} onDragOver={this.onDrag} onDrop={this.onDrop}>
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
