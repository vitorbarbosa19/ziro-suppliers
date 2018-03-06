const parseCSV = (csvFile) => {
	const [titles, ...rows] = csvFile.split('\n')
	return rows.map( (product) => {
    const characteristics = titles.split(',')
    const values = product.split(',')
    return Object.assign({}, ...values.map( (value, index) => {
      const characteristic = characteristics[index].trim()
      return {
        [characteristic]: value.trim()
      }
    }))
  })
}

export default parseCSV
