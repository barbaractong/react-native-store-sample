import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  List,
  FlatList,
  ScrollView,
  Alert,
  Button,
} from 'react-native';

import {createApolloFetch} from 'apollo-fetch';

import ItemCardComponent from '../../components/ItemCard/ItemCard.component';
import Carousel from '../../components/Carousel/Carousel.component';

import AddressContext from '../../../context/AddressInput.context';
import LocationContext from '../../../context/Location.context';

// import productsResponse from '../../mocks/get-products'

import * as getLocationCoord from '../../services/geolocation-api/getGeolocation.service';
import * as QUERY from '../../services/query/query';
// import * as SERVICES from '../../services/apollo';

import styles from './Products.screen.styles';

// const PROD_RESPONSE = require('../../mocks/productsData.json');
const CAROUSEL_DATA = require('../../mocks/carouselData.json');

const uri = 'https://api.code-challenge.ze.delivery/public/graphql';
const apolloFetch = createApolloFetch({uri});

// const ICON_BACK = require('../../assets/icons/volte.png');

export default function Products() {
  const [addressResponse, setAddressResponse] = useState({pocSearch: []});
  const [userAddressId, setUserAddressId] = useState({});

  const [_id, setId] = useState(0);

  const [productsList, setProductList] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    let subscribe = true;
    apolloFetch({
      query: QUERY.ADDRESS_QUERY,
      variables: {
        now: '2017-08-01T20:00:00.000Z',
        algorithm: 'NEAREST',
        lat: '-23.632919',
        long: '-46.699453',
      },
    })
      .then((result) => {
        const {data} = result;
        subscribe ? setAddressResponse(data) : null;
      })
      .then(() => {
        subscribe ? setUserAddressId(addressResponse.pocSearch) : null;
      })
      .then(() => {
        userAddressId.map((v) => setId(v.id));
      })
      .catch((error) => {
        console.log(error);
      });
    return () => (subscribe = false);
  }, [addressResponse.pocSearch, _id, userAddressId]);

  useEffect(() => {
    let subscribe = true;
    if (_id !== 0) {
      apolloFetch({
        query: QUERY.PRODUCT_LIST_QUERY,
        variables: {
          id: _id.toString(),
          search: searchValue,
          categoryId: null,
        },
      })
        .then((result) => {
          const {data} = result;
          subscribe ? setProductList(data.poc.products.splice(1, 5)) : null;
          productsList;
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return () => (subscribe = false);
  }, [_id, productsList, searchValue]);

  //PROD_RESPONSE.data.poc.products;

  const addressFromUser = useContext(AddressContext)[0];

  function onProductSearch(e, input) {
    if (e.nativeEvent.key === 'Enter') {
      setSearchValue(input);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.infoUserContainer}>
          <Text style={styles.addresText}>Endereço</Text>
          <Text style={styles.addressCompleteText}>{addressFromUser}</Text>
          <TextInput
            placeholder="Pesquisar"
            onChangeText={(input) => {
              setSearchValue(input);
            }}
            style={styles.search}
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.carouselContainer}>
          <Carousel data={CAROUSEL_DATA.data} />
        </View>
        <View style={styles.titleProducts}>
          <Text style={styles.titleProductsText}>Principais produtos</Text>
        </View>
        <View style={styles.list}>
          {productsList && (
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={productsList}
              renderItem={({item}) => <ItemCardComponent item={item} />}
              keyExtractor={(prod) => prod.id}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
}
