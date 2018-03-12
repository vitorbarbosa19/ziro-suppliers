import axios from 'axios'

const loadImage = (that) => async ({ result: file }) => {
	try {
		const uploadResult = await axios.post('https://api.cloudinary.com/v1_1/ziro/image/upload', {
			file: file,
			upload_preset: 'default'
		})
		console.log(uploadResult)
	} catch (error) {
		console.log(error)
	}
}

export default loadImage
