import React from 'react'
import { Image } from 'cloudinary-react'
import { dropPopup, title, drop, release } from './styles'

const DropPopup = (props) => (
	props.isDragged &&
		<div style={dropPopup}
			onDragLeave={props.dragLeave}
			onDragOver={props.dragOver}
			onDrop={props.onDrop}
		>
			<div style={drop}>
				<p style={title}>Cadastro de produtos</p>
				<Image
		      cloudName='ziro'
		      width={window.innerWidth > 500 ? '120' : '90'}
		      publicId='upload_s0ku2z'
		      version='1518371844'
		      format='png'
		      secure='true'
	   		/>
	   		<p>Você já pode soltar o arquivo .CSV e/ou imagens</p>
	   		<span style={release}>Solte os arquivos</span>
			</div>
		</div>
)

export default DropPopup
