import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { theme } from '../theme';

const Loading = () => {
  return (
    <View style={styles.сontainer}>
      <View style={styles.logo}>
        <ActivityIndicator size={'large'} />
      </View>
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
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.logoBackground,
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});

export default Loading;
