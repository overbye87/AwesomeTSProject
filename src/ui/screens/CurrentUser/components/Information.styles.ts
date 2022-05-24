import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  сontainerLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 5,
  },
  сontainerRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 5,
  },
  text: {
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 20,
    color: theme.color.gray,
  },
});
