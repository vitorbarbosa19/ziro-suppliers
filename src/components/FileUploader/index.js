import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import CREATE_PRODUCT from './mutations/CREATE_PRODUCT'
import { Image } from 'cloudinary-react'
import { dropZone, title } from './styles'

export default class FileUploader extends Component {
	createProduct = async (mutate) => {
		try {
			console.log(await mutate())
		} catch(error) {
			console.log(error)
		}
	}
	render = () => (
		<Mutation
			mutation={CREATE_PRODUCT}
			variables={{
				brand: 'Luzia Fazzolli',
				description: 'Blusa com babados',
				price: 239,
				reference: '008-2491'
		}}>
			{ mutate => (
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
						<p onClick={this.createProduct.bind(null, mutate)}>
							Arraste aqui um arquivo .CSV ou imagens
						</p>
					</div>
			)}
		</Mutation>
	)
}
