import React, { useContext, useEffect } from 'react'
import { 
	View, 
	Text, 
	Image, 
	FlatList, 
	ScrollView, 
	Alert, 
	Button } from 'react-native'

import { useQuery } from '@apollo/react-hooks';

import Carousel from '../../components/Carousel/Carousel.component';
import ItemCardComponent from '../../components/ItemCard/ItemCard.component'

import AddressContext from '../../../context/AddressInput.context';
import LocationContext from '../../../context/Location.context';

import styles from './Products.screen.styles'


const CAROUSEL_DATA = require('../../mocks/carouselData.json')

const data = {
	url: 'https://static.clubeextra.com.br/img/uploads/1/991/584991.jpg',
	title: 'Skol 269ml - Unidade',
	description: 'Cervejas',
	id: 1
}



export default function Products() {
	const addressFromUser = useContext(AddressContext)[0];
	const locationFromAPI = useContext(LocationContext)[0];

	useEffect(() => {
		
	}, [])

	return (
	<View style={styles.container}>
		<ScrollView>
			<View style={styles.topContainer}>
				<View style={styles.infoUserContainer}>
					<Text style={styles.addresText}>Endereço</Text>
					<Text style={styles.addressCompleteText}>{addressFromUser}</Text>
					<Text style={styles.addressCompleteText}>Location: </Text>
				</View>
			</View>
			<View style={styles.carouselContainer}>
				<Carousel data={CAROUSEL_DATA.data} />
			</View>
			<ItemCardComponent item={data} />
			<ItemCardComponent item={data} />
		</ScrollView>
	</View>
	)
}
