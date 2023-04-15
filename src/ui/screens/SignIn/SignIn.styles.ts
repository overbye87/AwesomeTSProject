import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallLogoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    alignSelf: 'center',
  },
  signUpText: {
    marginTop: 25,
  },
  signUpLink: {
    color: theme.color.logoBackground,
  },
});
