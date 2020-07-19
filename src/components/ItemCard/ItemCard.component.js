import React from 'react'
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native'

export default function ItemCardComponent({ item }) {
    return (
        <View style={styles.cardView}>
            <Image style={styles.image} source={{ uri: item.url }} />
            <View style={styles.textView}>
                <Text style={styles.itemTitle}> {item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
        </View>
    )
}

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        height: 300,
        width: SCREEN_WIDTH-200,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        alignSelf: "center",
        margin: 20
    },

    textView: {
        flex: .1,
        position: 'absolute',
        bottom: 10,
        margin: 10,
        alignSelf: "center",
    },
    image: {
        flex: .7,
        marginTop: 10,
        alignSelf: "center",
        borderRadius: 10,
        width: 200,
        height: 200
    },
    itemTitle: {
        color: '#0D0D0D',
        fontSize: 14,
        marginBottom: 5,
        fontWeight: "bold",
        textAlign: "center"
    },
    itemDescription: {
        color: '#0D0D0D',
        fontSize: 12,
        textAlign: "center"
    }
})

