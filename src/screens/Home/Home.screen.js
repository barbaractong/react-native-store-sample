import React, { useState, useEffect } from 'react'
import {
    View,
    Image,
    Alert,
    Text,
    TextInput,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';

import styles from './Home.screen.styles';

import * as getLocationCoord from '../../services/geolocation-api/getGeolocation.service';

export default function Home() {
    const ICON_HOME = require('../../assets/images/logo_undraw.png');

    const [addressInput, setAddressInput] = useState('');

    function getLocation(ADDRESS) {
        LOCATION_FROM_API = getLocationCoord.decodeUrlParameter(ADDRESS);
        Alert.alert(LOCATION_FROM_API); // retorna link para chamada da api
    }

    function getParamsLocation(URL) {   // chamar o address input aqui
        const [responseData, setResponseData] = useState({});

        fetch(URL).then((response) => response.json()).then((responseJSON) => {
            setResponseData(responseJSON.results);
            Alert.alert('fetch data')
        });
    }

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
                                onChangeText={(addressInput) => setAddressInput(addressInput)} />
                            <Text style={styles.subtitleInput}>Insira o seu endereço</Text>
                            <TouchableOpacity onPress={() => getLocation(addressInput)}>
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

