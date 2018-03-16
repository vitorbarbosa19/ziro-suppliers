const parseCSV = (csvFile) => {
  console.log(csvFile)
	const [titles, ...rows] = csvFile.split('\n')
	return rows.map( (product) => {
    const characteristics = titles.split(',')
    const values = product.split(',')
    return {
      [characteristics[0].trim()]: values[0].trim(),
      [characteristics[1].trim()]: values[1].trim(),
      [characteristics[2].trim()]: values[2].trim(),
      Grade: {
        [characteristics[3].trim()]: values[3].trim(),
        [characteristics[4].trim()]: values[4].trim(),
        [characteristics[5].trim()]: values[5].trim(),
      }
    }
  })
}

export default parseCSV
