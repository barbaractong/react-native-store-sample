import React from 'react'
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'

import Carousel from '../../components/Carousel/Carousel.component';
import ItemCardComponent from '../../components/ItemCard/ItemCard.component'

import styles from './Products.screen.styles'

const PRODUCT_DATA = require('../../mocks/get-products.json');

const ICON_CANCEL = require('../../assets/icons/close(1).png')
const CAROUSEL_DATA = require('../../mocks/carouselData.json')

const data = {
    url: 'https://static.clubeextra.com.br/img/uploads/1/991/584991.jpg',
    title: 'Skol 269ml - Unidade',
    description: 'Cervejas',
    id: 1
}

export default function Products() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.topContainer}>
                    <View style={styles.infoUserContainer}>
                        <Text style={styles.addresText}>Endereço</Text>
                        <Text style={styles.addressCompleteText}>Rua do manifesto, 198</Text>
                        <Text style={styles.addressCompleteText}>Ipiranga, 04209000</Text>
                    </View>
                    <TouchableOpacity style={styles.iconBackContainer} onPress={() => { }}>
                        <Image style={styles.iconBack} source={ICON_CANCEL}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.carouselContainer}>
                    <Carousel data={CAROUSEL_DATA.data} />
                </View>
                <FlatList>
                    <ItemCardComponent item={data} />
                    <ItemCardComponent item={data} />
                </FlatList>
            </ScrollView>
        </View>
    )
}
