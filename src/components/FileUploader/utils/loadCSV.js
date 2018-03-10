import CHECK_PRODUCT from '../queries/CHECK_PRODUCT'
import CHECK_USER from '../queries/CHECK_USER'
import CREATE_PRODUCT from '../mutations/CREATE_PRODUCT'
import UPDATE_PRODUCT from '../mutations/UPDATE_PRODUCT'
import UPDATE_GRID from '../mutations/UPDATE_GRID'
import parseCSV from './parseCSV'

const loadCSV = (that) => async (reader) => {
	const products = parseCSV(reader.result)
	try {
		const { data: { User: { id: productOwner } } } = await that.props.client.query({
			query: CHECK_USER,
			variables: {
				brand: that.props.userName
			}
		})
		const result = await Promise.all(products.map( async (product) => {
			const { data: { Product: productExists } } = await that.props.client.query({
				query: CHECK_PRODUCT,
				variables: {
					reference: product.Referência
				}
			})
			if (productExists) {
				const { data: { updateProduct: productUpdated } } = await that.props.client.mutate({
					mutation: UPDATE_PRODUCT,
					variables: {
						id: productExists.id,
						description: product.Descrição,
						price: product.Preço
					}
				})
				const { data: { updateGrid: gridUpdated } } = await that.props.client.mutate({
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
				return await that.props.client.mutate({
					mutation: CREATE_PRODUCT,
					variables: {
						brand: that.props.userName,
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
		/* clear file selection so that the user can select a new file if needed */
		that.uploadButton.value = ''
		console.log(result)
	} catch (error) {
		/* clear file selection so that the user can select a new file if needed */
		that.uploadButton.value = ''
		console.log(error)
	}	
}

export default loadCSV
