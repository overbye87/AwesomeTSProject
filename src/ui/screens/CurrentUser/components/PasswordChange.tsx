import React from 'react';
import {
  Alert,
  View,
} from 'react-native';
import { useTypedSelector } from '../../../../store/store';

import { IPasswordChange } from '../../../../types/userApi';
import { styles } from './PasswordChange.styles';
import UserPasswordChangeForm from './UserPasswordChangeForm';

const CurrentUser = () => {
  const currentUser = useTypedSelector(({ user }) => user.currentUser);
  if (!currentUser) return null;

  const initialValues = {
    oldPassword: '',
    newPassword: '',
  };

  const handleSubmit = (values: IPasswordChange) => {
    Alert.alert('values', JSON.stringify(values, null, 2));
  };

  return (
    <View style={styles.сontainer}>
      <UserPasswordChangeForm initialValues={initialValues} onSubmit={handleSubmit}/>
    </View>
  );
};

export default CurrentUser;
