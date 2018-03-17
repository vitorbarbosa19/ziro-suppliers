import CHECK_PRODUCT from '../queries/CHECK_PRODUCT'
import CHECK_USER from '../queries/CHECK_USER'
import CREATE_PRODUCT from '../mutations/CREATE_PRODUCT'
import UPDATE_PRODUCT from '../mutations/UPDATE_PRODUCT'
import UPDATE_GRID from '../mutations/UPDATE_GRID'
import parseCSV from './parseCSV'

const loadCSV = (that) => async (reader) => {
	const products = parseCSV(reader.result)
	that.props.changeUiState('UPLOAD_PRODUCTS')
	that.setState({ uploadOk: false })
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
					referencia: product.referencia
				}
			})
			if (productExists) {
				const { data: { updateProduct: productUpdated } } = await that.props.client.mutate({
					mutation: UPDATE_PRODUCT,
					variables: {
						id: productExists.id,
						descricao: product.descricao,
						preco: product.preco
					}
				})
				// add the id to the grid object if it already exists in the database
				product.grade.map( (newGrid) => {
					productExists.grade.map( (oldGrid) => {
						if (newGrid.cor === oldGrid.cor && newGrid.tamanho === oldGrid.tamanho)
							Object.assign(newGrid, { id: oldGrid.id })
					})
				})
				const gridUpdated = await Promise.all(product.grade.map( async (grid) => {
					const { data: { updateGrid: update } } = await that.props.client.mutate({
						mutation: UPDATE_GRID,
						variables: {
							id: grid.id,
							cor: grid.cor,
							tamanho: grid.tamanho,
							estoque: grid.estoque
						}
					})
					return update
				}))
				return { productUpdated, gridUpdated }
			} else {
				return await that.props.client.mutate({
					mutation: CREATE_PRODUCT,
					variables: {
						brand: that.props.userName,
						referencia: product.referencia,
						descricao: product.descricao,
						preco: product.preco,
						grade: product.grade,
						ownerId: productOwner
					}
				})
			}
		}))
		that.props.changeUiState('UPLOAD_PRODUCTS_OK')
		that.setState({ uploadOk: true })
		console.log(result)
	} catch (error) {
		that.props.changeUiState('UPLOAD_PRODUCTS_ERROR')
		that.setState({ uploadOk: false })
		console.log(error)
	}
}

export default loadCSV
