import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import CREATE_PRODUCT from './mutations/CREATE_PRODUCT'
import parseCSV from './utils/parseCSV'
import { Image } from 'cloudinary-react'
import { dropZone, title, uploadOnHover, upload } from './styles'

class FileUploader extends Component {
	state = {
		buttonIsHovered: false
	}
	handleFile = () => {
		const reader = new FileReader()
		reader.onload = async () => {
			const products = parseCSV(reader.result)
			console.log(products)
			try {
				await Promise.all(products.map( async (product) => {
					console.log(await this.props.mutate({
						variables: {
							brand: this.props.userName,
							description: product.Descrição,
							price: product.Preço,
							reference: product.Referência,
							grid: {
								color: product.Cor,
								size: product.TAM,
								quantity: product["Estoque atual"]
							}
						}
					}))
				}))
			} catch (error) {
				console.log(error)
			}
		}
		reader.readAsText(...this.uploadButton.files)
	}
	clickInput = () => {
		this.uploadButton.click()
	}
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

export default graphql(CREATE_PRODUCT)(FileUploader)
