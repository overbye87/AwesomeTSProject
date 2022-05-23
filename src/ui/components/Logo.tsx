import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../styles/theme';

type Props = {
  iconName?: string;
  small?: boolean;
  children?: React.ReactNode;
};

const Logo: React.FC<Props> = (props) => {
  return (
    <View style={props.small ? styles.small : styles.logo}>
      {props.iconName && <Ionicons name={props.iconName} size={props.small ? 60 : 80}/>}
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    justifyContent: 'center',
    backgroundColor: theme.color.logoBackground,
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  small: {
    justifyContent: 'center',
    backgroundColor: theme.color.logoBackground,
    width: '100%',
    height: 100,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
  },
});

export default Logo;
