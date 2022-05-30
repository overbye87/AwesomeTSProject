import React from 'react';
import {
  View,
} from 'react-native';

import { useTypedSelector } from '../../../../store/store';
import Text from '../../../components/Text';
import { styles } from './Information.styles';

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

export default Information;
