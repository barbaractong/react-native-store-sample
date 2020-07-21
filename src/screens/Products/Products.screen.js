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

import { useQuery } from '@apollo/react-hooks';

import ItemCardComponent from '../../components/ItemCard/ItemCard.component'

import AddressContext from '../../../context/AddressInput.context';
import LocationContext from '../../../context/Location.context';

import productsResponse from '../../mocks/get-products'

import * as getLocationCoord from '../../services/geolocation-api/getGeolocation.service';
import * as QUERY from '../../services/query/query';

import styles from './Products.screen.styles'

const PROD_RESPONSE =  require('../../mocks/productsData.json');


export default function Products() {

	const newData = PROD_RESPONSE.data.poc.products;
	
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
				data={newData}
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
