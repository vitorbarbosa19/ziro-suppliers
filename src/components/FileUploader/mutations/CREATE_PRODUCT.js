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

// type User @model {
//   createdAt: DateTime!
//   id: ID! @isUnique
//   updatedAt: DateTime!
//   brand: String! @isUnique
//   products: [Product!]! @relation(name: "ProductOwner")
// }

// type Product @model {
//   id: ID! @isUnique
//   brand: String!
//   referencia: String!
//   descricao: String!
//   preco: String!
//   grade: [Grid!]! @relation(name: "ProductGrid")
//   owner: User! @relation(name: "ProductOwner")
// }

// type Grid @model {
//   id: ID! @isUnique
//   cor: String!
//   tamanho: String!
//   estoque: String!
//   product: Product! @relation(name: "ProductGrid")
// }