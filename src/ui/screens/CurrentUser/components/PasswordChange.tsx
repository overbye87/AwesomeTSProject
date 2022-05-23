import React from 'react';
import {
  Alert,
  StyleSheet,
  View,
} from 'react-native';
import { useTypedSelector } from '../../../../store/store';
import { theme } from '../../../styles/theme';
import { IPasswordChange } from '../../../../types/userApi';
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

const styles = StyleSheet.create({
  сontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});

export default CurrentUser;
