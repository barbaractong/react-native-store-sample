import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center"
    },
    carouselContainer: {
        marginTop: 30
    },
    productListContainer: {
        flex: 1,
        marginTop: 20,
        marginLeft: 10,
    },
    topContainer: {
        height: SCREEN_HEIGHT * .15,
        backgroundColor: '#F2AC29',
        justifyContent: "center",
    },
    infoUserContainer: {
        flex: .2,
        marginLeft: 20,
        alignSelf: "flex-start",
    },
    iconBackContainer: {
        flex: .2,
        alignSelf: "flex-end",
        marginRight: 20
    },
    iconBack: {
        width: 30,
        height: 30,
        marginRight: 2
    },
    addresText: {
        color: '#0D0D0D',
        fontFamily: "Comfortaa-Bold",
        fontSize: 16,
        marginBottom: 5,
    },
    addressCompleteText: {
        color: '#434259',
        fontFamily: "Comfortaa-Medium",
        fontSize: 14,
    }
});