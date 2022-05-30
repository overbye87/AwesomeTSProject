import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  сontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.color.logoBackground,
    borderRadius: 5,
    margin: 5,
    padding: 5,
  },
  image: {
    borderWidth: 1,
    borderColor: theme.color.logoBackground,
    padding: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginLeft: 5,
  },
  id: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  email: {
    color: theme.color.headerDark,
    textTransform: 'uppercase',
  },
  login: {
    alignSelf: 'flex-start',
    backgroundColor: theme.color.headerDark,
    color: theme.color.white,
    borderRadius: 5,
    marginTop: 5,
    paddingVertical: 2,
    paddingHorizontal: 10,
    textTransform: 'uppercase',
  },
  deleteButton: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 100,
    padding: 3,
    backgroundColor: theme.color.logoBackground,
    borderRadius: 3,
  },
  buttonText: {
    textAlign: 'center',
  },
});
