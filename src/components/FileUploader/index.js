import React, { Component } from 'react'
import { withApollo } from 'react-apollo'
import CHECK_PRODUCT from './queries/CHECK_PRODUCT'
import CHECK_USER from './queries/CHECK_USER'
import CREATE_PRODUCT from './mutations/CREATE_PRODUCT'
import UPDATE_PRODUCT from './mutations/UPDATE_PRODUCT'
import UPDATE_GRID from './mutations/UPDATE_GRID'
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
			try {
				const { data: { User: { id: productOwner } } } = await this.props.client.query({
					query: CHECK_USER,
					variables: {
						brand: this.props.userName
					}
				})
				const result = await Promise.all(products.map( async (product) => {
					const { data: { Product: productExists } } = await this.props.client.query({
						query: CHECK_PRODUCT,
						variables: {
							reference: product.Referência
						}
					})
					if (productExists) {
						const { data: { updateProduct: productUpdated } } = await this.props.client.mutate({
							mutation: UPDATE_PRODUCT,
							variables: {
								id: productExists.id,
								description: product.Descrição,
								price: product.Preço
							}
						})
						const { data: { updateGrid: gridUpdated } } = await this.props.client.mutate({
							mutation: UPDATE_GRID,
							variables: {
								id: productExists.grid.id,
								color: product.Cor,
								size: product.Tamanho,
								quantity: product.Estoque
							}
						})
						return { productUpdated, gridUpdated }
					} else {
						return await this.props.client.mutate({
							mutation: CREATE_PRODUCT,
							variables: {
								brand: this.props.userName,
								reference: product.Referência,
								description: product.Descrição,
								price: product.Preço,
								grid: {
									color: product.Cor,
									size: product.Tamanho,
									quantity: product.Estoque
								},
								ownerId: productOwner
							}
						})
					}
				}))
				/* clear file selection so that user can select again */
				this.uploadButton.value = ''
				console.log(result)
			} catch (error) {
				/* clear file selection so that user can select again */
				this.uploadButton.value = ''
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

export default withApollo(FileUploader)
