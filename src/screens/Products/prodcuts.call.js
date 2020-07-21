/*
	useEffect(() => {
		console.log('entrou no fetch de info do endereco')
		fetch('https://api.code-challenge.ze.delivery/public/graphql', {
			method: 'POST',
			headers: {'Content-type': 'application/json'},
			body: JSON.stringify({QUERY.ADDRESS_QUERY})
		})
		.then( res => res.json())
		.then( res => {
			res.data.pocSearch.map( res => setUserID(res.id))
		})
		.catch( err => console.log(err))
	}, [])

	
	useEffect(() => {
		if(userID !== 0){
			console.log('entrou no if do userID')
			fetch('https://api.code-challenge.ze.delivery/public/graphql', {
			method: 'POST',
			headers: {'Content-type': 'application/json'},
			body: JSON.stringify({QUERY.PRODUCT_LIST_QUERY})
		}).then( res => res.json()).then( data => {
			console.log('fetch products from server')
		}).catch( err => console.log(err))
		}
	}, [])
	*/