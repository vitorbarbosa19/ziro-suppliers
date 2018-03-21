const isImage = (file) => {
	const extensionFromName = file.name.split('.').slice(-1).pop().toLowerCase()
	const extensionFromType = file.type
	return /^image\/(png|jpeg)$/.test(file.type) || /^(png|jpeg)$/.test(extensionFromName)
}

export default isImage
