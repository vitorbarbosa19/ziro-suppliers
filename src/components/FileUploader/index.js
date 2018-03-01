import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import createProduct from './queries/createProduct'
import { Image } from 'cloudinary-react'
import { dropZone, title } from './styles'

class FileUploader extends Component {
	componentDidMount() {
		this.props.mutate().then( ({ data }) => { console.log(data) }).catch( (error) => console.log(error))
	}
	render() {
		return (
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
			</div>
		)
	}
}

const FileUploaderWithData = graphql(createProduct)(FileUploader)
export default withRouter(FileUploaderWithData)