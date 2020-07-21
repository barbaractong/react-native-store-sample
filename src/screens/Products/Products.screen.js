import React, { useContext, useEffect, useState } from 'react'
import { 
	View, 
	Text, 
	TextInput,
	Image, 
	List,
	FlatList, 
	ScrollView, 
	Alert, 
	Button } from 'react-native'

import { createApolloFetch } from 'apollo-fetch'; 

import ItemCardComponent from '../../components/ItemCard/ItemCard.component'
import Carousel from '../../components/Carousel/Carousel.component';

import AddressContext from '../../../context/AddressInput.context';
import LocationContext from '../../../context/Location.context';

// import productsResponse from '../../mocks/get-products'

import * as getLocationCoord from '../../services/geolocation-api/getGeolocation.service';
import * as QUERY from '../../services/query/query';
import * as SERVICES from '../../services/apollo'

import styles from './Products.screen.styles'

const PROD_RESPONSE =  require('../../mocks/productsData.json');
const CAROUSEL_DATA = require('../../mocks/carouselData.json')

const uri = 'https://api.code-challenge.ze.delivery/public/graphql';
const apolloFetch = createApolloFetch({ uri });

const ICON_BACK = require('../../assets/icons/volte.png')

export default function Products() {
	console.disableYellowBox = true;
	
	[addressResponse, setAddressResponse] = useState({pocSearch: []});
	[userAddressId, setUserAddressId] = useState({});

	[id, setId] = useState(0);

	[productsList, setProductList] = useState()

	useEffect(() => {
		let isAddressSubscribed = true;

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
				isAddressSubscribed ? setAddressResponse(data) : null	
			})
			.then(() => {
				isAddressSubscribed ? setUserAddressId(addressResponse.pocSearch) : null;
			})
			.then(() => {
				isAddressSubscribed ? userAddressId.map(v => setId(v.id)) : null
				console.log(id)
			})
			.catch(error => {
				console.log(error)
			  });
		return () => isAddressSubscribed = false;
	}, [])

	useEffect(() => {
		let isProductListSubscribed = true;
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
					isProductListSubscribed ? setProductList(data.poc.products.splice(1, 5)) : null
					productsList;
				})
				.catch(error => {
					console.log(error)
				  });
		return () => isProductListSubscribed = false;
	}
	}, [productsList])

	;

	 //PROD_RESPONSE.data.poc.products;
	
	const addressFromUser = useContext(AddressContext)[0];
	const locationFromAPI = useContext(LocationContext)[0];

	const [userData, setUserData] = useState({});
	const [userID, setUserID] = useState('')

	const  newData = productsList;
	
	return (
	<View style={styles.container}>
		<View style={styles.topContainer}>
				<View style={styles.infoUserContainer}>
					<Text style={styles.addresText}>Endereço</Text>
					<Text style={styles.addressCompleteText}>{addressFromUser}</Text>
					<TextInput placeholder = "Pesquisar" style = {styles.search}/>
				</View>
		</View>
		<ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.carouselContainer}>
                    <Carousel data={CAROUSEL_DATA.data} />
                </View>
			<View style = {styles.titleProducts}>
				<Text style = {styles.titleProductsText}>Principais produtos</Text>
        	</View>
			<View style = {styles.list}>
				<FlatList
					horizontal
					showsHorizontalScrollIndicator={false}
					data={productsList}
					renderItem={({ item }) => (
						<ItemCardComponent item = {item} />
					)}
					keyExtractor={prod => prod.id}
					
				/>
			</View>
		</ScrollView>
	</View>
	)
}
