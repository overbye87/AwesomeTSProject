import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useKeyboardVisible } from '../../utils/hooks/useKeyboardVisible';
import { theme } from '../styles/theme';

type Props = {
  iconName?: string;
  children?: React.ReactNode;
};

const Logo: React.FC<Props> = (props) => {
  const { keyboardVisible } = useKeyboardVisible();
  return (
    <View style={keyboardVisible ? styles.small : styles.logo}>
      {props.iconName && (
        <Ionicons name={props.iconName} size={keyboardVisible ? 60 : 80} />
      )}
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
  small: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.logoBackground,
    width: '100%',
    height: 100,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
  },
});

export default Logo;
