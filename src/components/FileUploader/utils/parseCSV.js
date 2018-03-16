const parseCSV = (csvFile) => {
	const [titles, ...rows] = csvFile.split('\n')
	const products = rows.map( (product) => {
    const characteristics = titles.split(',')
    const values = product.split(',')
    const productObject = {
      [characteristics[0].trim()]: values[0].trim(),
      [characteristics[1].trim()]: values[1].trim(),
      [characteristics[2].trim()]: values[2].trim(),
      Grade: [{
        [characteristics[3].trim()]: values[3].trim(),
        [characteristics[4].trim()]: values[4].trim(),
        [characteristics[5].trim()]: values[5].trim(),
      }]
    }
    return productObject
  })
  // use reduce to merge products with the same reference number and return the unique list of products
  // products with the same reference number exist because their Grade is different
  let uniques = []
  products.reduce( (ids, product, index) => {
    const duplicated = ids.findIndex( (id) => { return id === product.Referência } )
    const isDuplicated = duplicated !== -1
    // if there is a duplicate, merge their Grade field together into an array of objects
    if (isDuplicated)
      uniques[duplicated].Grade = [...uniques[duplicated].Grade, ...product.Grade]
    else
      uniques = [...uniques, product]
    return [...ids, product.Referência]
  }, [])
  return uniques
}

export default parseCSV
