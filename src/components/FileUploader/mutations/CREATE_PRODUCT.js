import { gql } from 'apollo-boost'

export default gql`
	mutation CREATE_PRODUCT (
		$brand: String!,
		$referencia: String!,
		$descricao: String!,
		$preco: String!,
		$grade: [ProductgradeGrid!]!,
		$ownerId: ID!
	) {
			createProduct (
				brand: $brand,
				referencia: $referencia,
				descricao: $descricao,
				preco: $preco,
				grade: $grade,
				ownerId: $ownerId
			) {
					brand
					referencia
					descricao
				}
		}
`
