import loadCSV from './loadCSV'
import loadImage from './loadImage'
import isCSV from './isCSV'
import isImage from './isImage'

const handleFile = (that) => () => {
	[...that.uploadButton.files].map( (file) => {
		if (isCSV(file)) {
			that.setState({ wrongFileType: false })
			const reader = new FileReader()
			reader.onload = loadCSV(that).bind(null, reader)
			reader.readAsText(file)
		} 
		else if (isImage(file)) {
			that.setState({ wrongFileType: false })
			const reader = new FileReader()
			reader.onload = loadImage(that).bind(null, reader, file)
			reader.readAsDataURL(file)
		}
		else
			that.setState({ wrongFileType: true })
	})
}

export default handleFile
