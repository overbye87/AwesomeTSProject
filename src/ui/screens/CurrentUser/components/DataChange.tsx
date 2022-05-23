import React from 'react';
import {
  Alert,
  StyleSheet,
  View,
} from 'react-native';

import { useTypedSelector } from '../../../../store/store';
import { theme } from '../../../styles/theme';
import { IUserDataChange } from '../../../../types/userApi';
import UserDataChangeForm from './UserDataChangeForm';

const DataChange = () => {
  const currentUser = useTypedSelector(({ user }) => user.currentUser);
  if (!currentUser) return null;

  const initialValues = {
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    login: currentUser.login,
  };

  const handleSubmit = (values: IUserDataChange) => {
    Alert.alert('values', JSON.stringify(values, null, 2));
  };

  return (
    <View style={styles.сontainer}>
      <UserDataChangeForm initialValues={initialValues} onSubmit={handleSubmit}/>
    </View>
  );
};

const styles = StyleSheet.create({
  сontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});

export default DataChange;
