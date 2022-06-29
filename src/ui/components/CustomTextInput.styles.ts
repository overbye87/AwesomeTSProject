import { StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

export const styles = StyleSheet.create({
  input: {
    fontFamily: 'PressStart2P-Regular',
    marginTop: 10,
    fontSize: 12,
    lineHeight: 12,
    width: 300,
    borderBottomWidth: 1,
    borderColor: theme.color.mainText,
    marginBottom: 10,
    padding: 0,
  },
  label: {
    width: 330,
    color: theme.color.gray,
    fontSize: theme.fontSize.label,
    textAlign: 'left',
  },
  labelerror: {
    width: 330,
    color: theme.color.red,
    fontSize: theme.fontSize.label,
    textAlign: 'left',
  },
});
