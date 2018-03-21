const isCSV = (file) => {
	const extensionFromName = file.name.split('.').slice(-1).pop().toLowerCase()
	const extensionFromType = file.type
	return /^text\/csv$/.test(extensionFromType) || /^csv$/.test(extensionFromName)
}

export default isCSV
