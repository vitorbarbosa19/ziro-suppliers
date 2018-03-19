const parseCSV = (csvFile) => {
	const [titles, ...rows] = csvFile.split('\n')
	const products = rows.map( (product) => {
    if (product) {
      const values = product.split(';')
      const productObject = {
        descricao: values[0].trim(),
        referencia: values[1].trim(),
        preco: values[4].trim(),
        grade: [{
          cor: values[2].trim(),
          tamanho: values[3].trim(),
          estoque: values[5].trim(),
        }]
      }
      return productObject
    }
  }).filter( (product) => Boolean(product))
  // use reduce to merge products with the same reference number and return the unique list of products
  // products with the same reference number exist because their grade is different
  let uniques = []
  products.reduce( (ids, product, index) => {
    const duplicated = ids.findIndex( (id) => { return id === product.referencia } )
    const isDuplicated = duplicated !== -1
    // if there is a duplicate, merge their grade field together into an array of objects
    if (isDuplicated) {
      uniques[duplicated].grade = [...uniques[duplicated].grade, ...product.grade]
      return ids
    }
    else {
      uniques = [...uniques, product]
      return [...ids, product.referencia]
    }
  }, [])
  return uniques
}

export default parseCSV
