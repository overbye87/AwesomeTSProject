import React from 'react';
import {
  Alert,
  View,
} from 'react-native';

import { useTypedSelector } from '../../../../store/store';
import { IUserDataChange } from '../../../../types/userApi';
import { styles } from './DataChange.styles';
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

export default DataChange;
