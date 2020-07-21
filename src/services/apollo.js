import { createApolloFetch } from 'apollo-fetch'; 

const uri = 'https://api.code-challenge.ze.delivery/public/graphql';
const apolloFetch = createApolloFetch({ uri });

export function ADDRESS_QUERY() {
  apolloFetch({ 
			query: QUERY.ADDRESS_QUERY, 
			variables: {
				now: "2017-08-01T20:00:00.000Z", 
				algorithm: "NEAREST", 
				lat: "-23.632919", 
				long: "-46.699453"
			}})
		  	.then(result => {
          console.log('get address data')
				const { data, errors, extensions } = result;
				setAddressResponse(data)				
			})
			.then(() => {
				setUserAddressId(addressResponse.pocSearch);
			})
			.then(() => {
				userAddressId.map(v => setId(v.id))
			})
			.catch(error => {
				console.log(error)
			  });
}