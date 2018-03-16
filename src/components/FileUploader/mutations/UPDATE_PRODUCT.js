import { gql } from 'apollo-boost'

export default gql`
	mutation UPDATE_PRODUCT (
		$id: ID!,
		$descricao: String!,
		$preco: String!
	) {
			updateProduct (
				id: $id,
				descricao: $descricao,
				preco: $preco
			) {
					id
					referencia
				}
		}
`
