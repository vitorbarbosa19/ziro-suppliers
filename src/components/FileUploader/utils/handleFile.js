import loadCSV from './loadCSV'
import loadImage from './loadImage'

const handleFile = (that) => () => {
	[...that.uploadButton.files].map( (file) => {
		if (/^text\/csv$/.test(file.type)) {
			const reader = new FileReader()
			reader.onload = loadCSV(that).bind(null, reader)
			reader.readAsText(file)
		}
		if (/^image\/(png|jpeg)$/.test(file.type)) {
			const reader = new FileReader()
			reader.onload = loadImage(that).bind(null, reader, file)
			reader.readAsDataURL(file)
		}
	})
}

export default handleFile
