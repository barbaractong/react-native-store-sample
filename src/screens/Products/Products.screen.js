import React, { useContext, useEffect, useState } from 'react'
import { 
	View, 
	Text, 
	Image, 
	List,
	FlatList, 
	ScrollView, 
	Alert, 
	Button } from 'react-native'

import { createApolloFetch } from 'apollo-fetch'; 

import ItemCardComponent from '../../components/ItemCard/ItemCard.component'

import AddressContext from '../../../context/AddressInput.context';
import LocationContext from '../../../context/Location.context';

// import productsResponse from '../../mocks/get-products'

import * as getLocationCoord from '../../services/geolocation-api/getGeolocation.service';
import * as QUERY from '../../services/query/query';
import * as SERVICES from '../../services/apollo'

import styles from './Products.screen.styles'

const PROD_RESPONSE =  require('../../mocks/productsData.json');

const uri = 'https://api.code-challenge.ze.delivery/public/graphql';
const apolloFetch = createApolloFetch({ uri });

export default function Products() {
	[addressResponse, setAddressResponse] = useState({pocSearch: []});
	[userAddressId, setUserAddressId] = useState({});

	[id, setId] = useState(0);

	[productsList, setProductList] = useState()

	useEffect(() => {
		apolloFetch({ 
			query: QUERY.ADDRESS_QUERY, 
			variables: {
				now: "2017-08-01T20:00:00.000Z", 
				algorithm: "NEAREST", 
				lat: "-23.632919", 
				long: "-46.699453"
			}})
		  	.then(result => {
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
	}, [])

	useEffect(() => {
		if (id !== 0){
			apolloFetch({ 
				query: QUERY.PRODUCT_LIST_QUERY, 
				variables: {
					id: id.toString(), 
					search: "", 
					categoryId: null, 
				}})
				  .then(result => {
					const { data, errors, extensions } = result;
					setProductList(data.poc.products)
					// console.log(productsList)
				})
				.catch(error => {
					console.log(error)
				  });
	}
	}, [])

	const newData = productsList //PROD_RESPONSE.data.poc.products;
	
	const addressFromUser = useContext(AddressContext)[0];
	const locationFromAPI = useContext(LocationContext)[0];

	const [userData, setUserData] = useState({});
	const [userID, setUserID] = useState('')
	
	return (
	<View style={styles.container}>
		<ScrollView>
			<View style={styles.topContainer}>
				<View style={styles.infoUserContainer}>
					<Text style={styles.addresText}>Endereço</Text>
					<Text style={styles.addressCompleteText}>{addressFromUser}</Text>
				</View>
			</View>
			
			<View style={styles.cardView}>
        	</View>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={productsList}
				renderItem={({ item }) => (
					<ItemCardComponent item = {item} />
				)}
				keyExtractor={prod => prod.id}
				
			/>
			<View style={styles.cardView}>
				
			</View>
		</ScrollView>
	</View>
	)
}
