import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  сontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    justifyContent: 'center',
    backgroundColor: theme.color.logoBackground,
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  logoText: {
    color: theme.color.mainText,
    fontSize: 28,
  },
  input: {
    width: 300,
    borderBottomWidth: 1,
    borderColor: theme.color.mainText,
    marginBottom: 20,
  },
  forgotPassword: {
    width: 300,
    textAlign: 'right',
  },
  signButton: {
    marginTop: 40,
    width: 300,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.color.logoBackground,
  },
  signText: {
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 18,
    color: theme.color.white,
  },
});
