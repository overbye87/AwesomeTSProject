import React from 'react';
import { Text, View } from 'react-native';
import { useTypedSelector } from '../store/store';

const CurrentUser = () => {
  const currentUser = useTypedSelector(({ user }) => user.currentUser);
  return (
    <View>
      <Text>{currentUser?.firstName}</Text>
      <Text>{currentUser?.lastName}</Text>
      <Text>{currentUser?.email}</Text>
      <Text>{currentUser?.login}</Text>
    </View>
  );
};

export default CurrentUser;
