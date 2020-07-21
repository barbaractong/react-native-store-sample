import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React, { useState, useEffect, useContext } from 'react'
import {
    View,
    Image,
    Text,
    TextInput,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';

import styles from './Home.screen.styles';

import * as getLocationCoord from '../../services/geolocation-api/getGeolocation.service';
import AddressContext from '../../../context/AddressInput.context';
import LocationContext from '../../../context/Location.context';

export default function Home({ navigation }) {
    const ICON_HOME = require('../../assets/images/logo_undraw.png');

    const [addressInput, setAddressInput] = useContext(AddressContext);
    const [geolocationLink, setGeolocationLink] = useState({ addressInfo: null });

    function getLocation(ADDRESS) {
        LOCATION_FROM_API = getLocationCoord.decodeUrlParameter(ADDRESS);
        setGeolocationLink(LOCATION_FROM_API);
    }

    const [responseData, setResponseData] = useState();
    const [isLoading, setLoading] = useState(true);

    const [coordinates, setCoordinates] = useContext(LocationContext)

    useEffect(() => {
        fetch(geolocationLink)
            .then((response) => response.json())
            .then((json) => setResponseData(json.results))
            .then( () => {
                responseData.map((value) => {
                    setCoordinates({
                        address: addressInput,
                        lat: (value.geometry.location.lat).toString(),
                        lng: (value.geometry.location.lng).toString(),
                        time: (new Date()).toString()
                    })
                })
            })
            .catch((error) => console.error(error))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"} enabled
            style={{ flex: 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Image
                            style={styles.imageTop}
                            source={ICON_HOME}
                        />
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.footerMiddle} />
                        <View style={styles.footerEnd}>
                            <TextInput
                                style={styles.inputAdress}
                                placeholder="Rua Pamplona, 200, Jardim Paulista"
                                onChangeText={(addressInput) => {   // devo atualizar o addressFromUser aqui
                                    setAddressInput(addressInput);
                                }} />
                            <Text style={styles.subtitleInput}>Insira o seu endereço</Text>
                            <TouchableOpacity onPress={() => {
                                getLocation(addressInput);
                                navigation.navigate('Products')
                            }}>
                                <View style={styles.buttonSubmitAddress}>
                                    <Text style={styles.buttonText}>Procurar bebidas disponíveis</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

