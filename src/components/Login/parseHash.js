const parseHash = (hash) => {
	if (hash[0] === '#') {
	  return JSON.stringify(hash.substr(1).split('&').map( (hashParam) => {
	    const [key, value] = hashParam.split('=')
	    return { [key]: value }
	  }).reduce( (accumulatedPairs, currentPair) => {
	    return Object.assign(accumulatedPairs, currentPair) 
	  }))
	}
}

export default parseHash
