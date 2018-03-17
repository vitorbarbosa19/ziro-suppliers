import { gql } from 'apollo-boost'

export default gql`
	mutation CREATE_GRID (
		$cor: String!,
		$tamanho: String!,
		$estoque: String!,
		$productId: ID!
	) {
			createGrid (
				cor: $cor,
				tamanho: $tamanho,
				estoque: $estoque,
				productId: $productId
			) {
					id
				}
		}
`
