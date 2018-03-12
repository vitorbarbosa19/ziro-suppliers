import axios from 'axios'

const loadImage = (that) => async (file) => {
	try {
		const result = await axios.post('https://api.cloudinary.com/v1_1/ziro/image/upload', {
			file: file,
			upload_preset: 'default'
		})
		console.log(result)
	} catch (error) {
		console.log(error)
	}
}

export default loadImage
