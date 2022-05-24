import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  сontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  dotContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  dotActive: {
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  right: {},
  left: {},
  arrow: {
    fontSize: 50,
    lineHeight: 50,
    color: theme.color.white,
  },
});
