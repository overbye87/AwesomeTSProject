import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import Logo from './Logo';

const Loading: React.FC = () => {
  return (
    <View style={styles.сontainer}>
      <Logo>
        <ActivityIndicator size={'large'} />
      </Logo>
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

export default Loading;
