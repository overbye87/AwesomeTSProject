import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useTypedSelector } from '../../store/store';
import { theme } from '../../theme';

const CurrentUser = () => {
  const currentUser = useTypedSelector(({ user }) => user.currentUser);
  if (!currentUser) return null;

  return (
    <View style={styles.сontainer}>
      <Text style={styles.text}>{currentUser.firstName}</Text>
      <Text style={styles.text}>{currentUser.lastName}</Text>
      <Text style={styles.text}>{currentUser.email}</Text>
      <Text style={styles.text}>{currentUser.login}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  сontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.background,
  },
  text: {
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 20,
    color: theme.color.gray,
  },
});

export default CurrentUser;
