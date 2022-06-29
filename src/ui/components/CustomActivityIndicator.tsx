import React from 'react';
import {
  ActivityIndicator,
  View,
} from 'react-native';
import { styles } from './CustomActivityIndicator.styles';
import Logo from './Logo';

const CustomActivityIndicator: React.FC = () => {
  return (
    <View style={styles.сontainer}>
      <Logo>
        <ActivityIndicator size="large" />
      </Logo>
    </View>
  );
};

export default CustomActivityIndicator;
