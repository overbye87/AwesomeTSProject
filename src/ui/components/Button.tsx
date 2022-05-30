import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { theme } from '../styles/theme';
import Text from './Text';

type Props = {
  children?: React.ReactNode;
  onPress?: ((event: GestureResponderEvent) => void) | undefined,
  disabled?: boolean,
  style?: StyleProp<ViewStyle>,
  wrapperStyle?: StyleProp<ViewStyle>,
};

const MenuButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      style={[styles.button, props.style]}
      onPress={props.onPress}
    >
      <View style={[styles.wrapperStyle, props.wrapperStyle]}>
        <Text style={styles.buttonText}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

MenuButton.defaultProps = {
  children: null,
  onPress: undefined,
  disabled: false,
  style: null,
  wrapperStyle: null,
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    width: 300,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.color.logoBackground,
  },
  wrapperStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: theme.color.white,
  },
});

export default MenuButton;
