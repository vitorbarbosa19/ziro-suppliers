import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import CREATE_PRODUCT from './mutations/CREATE_PRODUCT'
import parseCSV from './utils/parseCSV'
import { Image } from 'cloudinary-react'
import { dropZone, title, uploadOnHover, upload } from './styles'

export default class FileUploader extends Component {
	state = {
		description: '',
		price: '',
		reference: '',
		buttonIsHovered: false
	}
	createProduct = async (mutate) => {
		try {
			console.log(await mutate())
		} catch(error) {
			console.log(error)
		}
	}
	handleFile = () => {
		const reader = new FileReader()
		reader.onload = () => {
			const products = parseCSV(reader.result)
			this.setState({
				description: products[0].Descrição,
				price: products[0].Preço,
				reference: products[0].Referência
			})
		}
		reader.readAsText(...this.uploadButton.files)
	}
	clickInput = () => {
		this.uploadButton.click()
	}
	buttonHoverIn = () => { this.setState({ buttonIsHovered: true }) }
	buttonHoverOut = () => { this.setState({ buttonIsHovered: false }) }
	render = () => (
		<Mutation
			mutation={CREATE_PRODUCT}
			variables={{
				brand: this.props.userName,
				description: this.state.description,
				price: this.state.price,
				reference: this.state.reference
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
			)}
		</Mutation>
	)
}
