import axios from 'axios'
import generateUniqueId from './generateUniqueId'

const loadImage = (that) => async ({ result: file }, { name }) => {
	try {
		const uploadResult = await axios.post('https://api.cloudinary.com/v1_1/ziro/image/upload', {
			file: file,
			upload_preset: 'default',
			tags: that.props.userName,
			public_id: generateUniqueId(name)
		})
		console.log(uploadResult)
	} catch (error) {
		console.log(error)
	}
}

export default loadImage
