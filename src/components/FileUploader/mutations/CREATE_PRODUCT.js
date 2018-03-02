import { gql } from 'apollo-boost'

export default gql`
	mutation CREATE_PRODUCT {
		createProduct(
			brand: "Luzia Fazzolli",
			description: "Blusa com babados",
			price: 239,
			reference: "008-2491"
		) {
			brand
		}
	}
`