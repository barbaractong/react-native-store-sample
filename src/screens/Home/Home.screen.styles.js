import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

export default StyleSheet.create({ 
    top: {
        flex: 1,
        height: SCREEN_HEIGHT * .2,
        backgroundColor: '#F26389',
        borderBottomRightRadius: 75,
    },
    imageTop: { 
        flex: 1,
        marginTop: 10,
        marginLeft: SCREEN_WIDTH * .02,
        height: 300,
        width: 200
    },
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    footer: {
        flex: 1,
        backgroundColor: "white"
    },
    footerMiddle: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#F26389'
    },
    footerEnd: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 75,
    },
    subtitleInput: {
        textAlign: "center",
        marginTop: SCREEN_HEIGHT * .01,
        fontFamily: "Comfortaa-Light",
        fontSize: 10,
    },
    inputAdress: {
        marginTop: SCREEN_HEIGHT * .1,
        alignSelf: "center",
        width: SCREEN_WIDTH * .8,
        padding: 20,
        backgroundColor: '#F2F2F0',
        borderRadius: 20,
        fontFamily: "Comfortaa-Light",
    },
    buttonSubmitAddress: {
        marginTop: SCREEN_HEIGHT * .03,
        alignSelf: "center",
        width: SCREEN_WIDTH * .8,
        padding: 20,
        backgroundColor: '#F2AB27',
        alignItems: 'center',
        justifyContent: 'center', 
        borderRadius: 15,
    },
    buttonText: {
        fontFamily: "Comfortaa-Medium",
        color: 'white'
    }
});