import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  сontainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: theme.color.logoBackground,
    borderRadius: 5,
    margin: 5,
    padding: 5,
  },
  pokemonImage: {
    width: 96,
    height: 96,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 5,
  },
  id: {
    position: 'absolute',
    top: 0,
    right: 5,
  },
  name: {
    color: theme.color.headerDark,
    textTransform: 'uppercase',
  },
  description: {
    textTransform: 'capitalize',
  },
  dataButton: {
    width: 100,
    padding: 3,
    backgroundColor: theme.color.logoBackground,
    borderRadius: 3,
    alignSelf: 'flex-end',
  },
  dataText: {
    textAlign: 'center',
  },
});
