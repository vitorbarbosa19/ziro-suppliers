import gql from 'graphql-tag'

export default gql`
	mutation createProduct {
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