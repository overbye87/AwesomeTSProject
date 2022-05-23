import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useTypedSelector } from '../../../../store/store';
import { theme } from '../../../styles/theme';

const Information = () => {
  const currentUser = useTypedSelector(({ user }) => user.currentUser);
  if (!currentUser) return null;

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={styles.сontainerLeft}>
        <Text style={styles.text}>NAME:</Text>
        <Text style={styles.text}>SURNAME:</Text>
        <Text style={styles.text}>EMAIL:</Text>
        <Text style={styles.text}>LOGIN:</Text>
      </View>
      <View style={styles.сontainerRight}>
        <Text style={styles.text}>{currentUser.firstName}</Text>
        <Text style={styles.text}>{currentUser.lastName}</Text>
        <Text style={styles.text}>{currentUser.email}</Text>
        <Text style={styles.text}>{currentUser.login}</Text>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
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

export default Information;
