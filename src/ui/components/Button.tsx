import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { theme } from '../styles/theme';

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
      <View style={[props.wrapperStyle]}>
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
  buttonText: {
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 20,
    color: theme.color.white,
  },
});

export default MenuButton;
