const generateUniqueId = (name) => {
	return `${name.replace(/\.(\W|\w)+/, '')}_${Math.random().toString(36).substring(2)}`
}

export default generateUniqueId
