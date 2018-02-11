import React, { Component } from 'react'
import { uploader, title, dropZone } from './styles'

export default class FileUploader extends Component {
	render() {
		return (
			<div style={uploader}>
				<p style={title}>Cadastro de novos produtos</p>
				<div style={dropZone}>
					<p>Ilustração</p>
					<p>Arraste aqui um arquivo .CSV ou imagens</p>
				</div>
			</div>
		)
	}
}