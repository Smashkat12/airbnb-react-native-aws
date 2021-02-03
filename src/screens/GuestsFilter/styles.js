import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    marginHorizontal: 20,
  },
  left: {},
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    marginHorizontal: 20,
    fontSize: 16,
  },
  sign: {
    fontSize: 20,
    color: '#474747',
  },
  category: {
    fontWeight: 'bold',
  },
  categoryDescription: {
    color: '#5b5b5b',
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#676767',
  },
});

export default styles;
