import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../../theme';

type Props = {
  children?: React.ReactNode;
  iconName?: string;
};

const Logo: React.FC<Props> = (props) => {
  return (
    <View style={styles.logo}>
      {props.iconName && <Ionicons name={props.iconName} size={80}/>}
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.logoBackground,
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});

export default Logo;
