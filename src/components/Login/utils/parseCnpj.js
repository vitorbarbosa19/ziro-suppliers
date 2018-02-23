export const parseCnpj = (cnpj) => {
	if (cnpj.length > 14)
		return cnpj.replace(/\W+|\D+/g,'').substr(0, 14)
	return cnpj.replace(/\W+|\D+/g,'')
}
