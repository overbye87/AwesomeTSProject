import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { theme } from '../theme';

type Props = {
  buttonLabel?: string,
  onPress?: () => void,
  disabled?: boolean,
};

const MenuButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      style={styles.button}
      onPress={props.onPress}>
      <Text style={styles.buttonText}>
        {props.buttonLabel}
      </Text>
    </TouchableOpacity>
  );
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
