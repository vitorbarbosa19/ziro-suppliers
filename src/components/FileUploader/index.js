import React, { Component } from 'react'
import { Image } from 'cloudinary-react'
import { uploader, title, dropZone } from './styles'

export default class FileUploader extends Component {
	render() {
		return (
			<div style={uploader}>
				<p style={title}>Cadastro de novos produtos</p>
				<div style={dropZone}>
					<Image
			      cloudName='ziro'
			      width={window.innerWidth > 500 ? '120' : '100'}
			      publicId='upload_s0ku2z'
			      version='1518371844'
			      format='png'
			      secure='true'
		   		/>
					<p>Arraste aqui um arquivo .CSV ou imagens</p>
				</div>
			</div>
		)
	}
}