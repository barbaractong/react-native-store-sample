import React from 'react'
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'

import styles from './Products.screen.styles'
import Carousel from '../../components/Carousel/Carousel.component';

const PRODUCT_DATA = require('../../mocks/get-products.json');

const ICON_CANCEL = require('../../assets/icons/close(1).png')
const CAROUSEL_DATA = require('../../mocks/carouselData.json')

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
                <View style={styles.productList}>

                </View>
            </ScrollView>
        </View>
    )
}
