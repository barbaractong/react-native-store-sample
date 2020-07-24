import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  carouselContainer: {
    marginTop: 30,
  },
  productListContainer: {
    flex: 1,
    marginTop: 20,
    marginLeft: 10,
  },
  topContainer: {
    height: SCREEN_HEIGHT * 0.15,
    backgroundColor: '#F2AC29',
    justifyContent: 'center',
  },
  infoUserContainer: {
    flex: 1,
    marginTop: 20,
    marginLeft: 20,
  },
  search: {
    backgroundColor: '#fff',
    opacity: 0.4,
    width: 375,
    height: 30,
    alignSelf: 'flex-start',
    marginTop: 18,
    borderRadius: 10,
  },
  titleProducts: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,
  },
  titleProductsText: {
    fontSize: 18,
  },
  addresText: {
    color: '#0D0D0D',
    fontFamily: 'Comfortaa-Bold',
    fontSize: 16,
    marginBottom: 5,
    marginTop: 5,
  },
  addressCompleteText: {
    color: '#434259',
    fontFamily: 'Comfortaa-Medium',
    fontSize: 14,
  },
  cardView: {
    flex: 1,
    marginTop: 30,
    marginBottom: 20,
    width: SCREEN_WIDTH - 30,
    height: SCREEN_HEIGHT / 3,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    alignSelf: 'center',
  },
  list: {
    marginBottom: 20,
  },
});
