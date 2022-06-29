import React from 'react';
import {
  View,
} from 'react-native';

import { useTypedSelector } from '../../../../store/store';
import CustomText from '../../../components/CustomText';
import { styles } from './Information.styles';

const Information = () => {
  const currentUser = useTypedSelector(({ user }) => user.currentUser);
  if (!currentUser) return null;

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={styles.сontainerLeft}>
        <CustomText style={styles.text}>NAME:</CustomText>
        <CustomText style={styles.text}>SURNAME:</CustomText>
        <CustomText style={styles.text}>EMAIL:</CustomText>
        <CustomText style={styles.text}>LOGIN:</CustomText>
      </View>
      <View style={styles.сontainerRight}>
        <CustomText style={styles.text}>{currentUser.firstName}</CustomText>
        <CustomText style={styles.text}>{currentUser.lastName}</CustomText>
        <CustomText style={styles.text}>{currentUser.email}</CustomText>
        <CustomText style={styles.text}>{currentUser.login}</CustomText>
      </View>
    </View>

  );
};

export default Information;
