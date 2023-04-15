import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  statText: {
    fontSize: 20,
    marginHorizontal: 10,
    textTransform: 'capitalize',
  },
  statHeader: {
    marginTop: 20,
    fontSize: 28,
    marginHorizontal: 10,
    color: theme.color.headerDark,
  },
  statContainer: {
    flexDirection: 'row',
  },
  statLeft: {
    flex: 1,
    alignItems: 'flex-end',
  },
  statRight: {
    flex: 1,
  },
  statAbility: {
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 10,
    textTransform: 'uppercase',
    padding: 3,
    margin: 3,
    color: 'white',
    backgroundColor: 'gray',
    borderRadius: 4,
  },
});
