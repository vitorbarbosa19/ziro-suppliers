import { gql } from 'apollo-boost'

export default gql`
	mutation UPDATE_GRID (
		$id: ID!,
		$cor: String!,
		$tamanho: String!,
		$estoque: String!
	) {
			updateGrid (
				id: $id,
				cor: $cor,
				tamanho: $tamanho,
				estoque: $estoque
			) {
					id
				}
		}
`
