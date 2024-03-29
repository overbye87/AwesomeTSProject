import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  сontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 18,
    color: theme.color.headerBackground,
  },
  text: {
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 18,
    color: theme.color.mainText,
  },
});
