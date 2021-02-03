import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 20,
  },
  button: {
    backgroundColor: 'white',
    width: 200,
    height: 40,
    marginLeft: 20,
    marginTop: 25,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchButton: {
    backgroundColor: 'white',
    width:
      Dimensions.get('screen').width -
      20 /* the 20 comes from marginHorizontal (left 10, right 10) */,
    height: 60,
    marginHorizontal: 10,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    zIndex: 100,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
