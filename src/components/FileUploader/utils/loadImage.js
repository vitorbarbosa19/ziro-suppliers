import axios from 'axios'
import generateUniqueId from './generateUniqueId'

const loadImage = (that) => async ({ result: file }, { name }) => {
	that.props.changeUiState('UPLOAD_PRODUCTS')
	that.setState({ uploadOk: false })
	try {
		const uploadResult = await axios.post('https://api.cloudinary.com/v1_1/ziro/image/upload', {
			file: file,
			upload_preset: 'default',
			tags: that.props.userName,
			public_id: generateUniqueId(name)
		})
		that.props.changeUiState('UPLOAD_PRODUCTS_OK')
		that.setState({ uploadOk: true })
		console.log(uploadResult)
	} catch (error) {
		that.props.changeUiState('UPLOAD_PRODUCTS_ERROR')
		that.setState({ uploadOk: false })
		console.log(error)
	}
}

export default loadImage
