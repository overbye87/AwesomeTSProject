import React from 'react';
import {
  GestureResponderEvent,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { styles } from './CustomButton.styles';
import CustomText from './CustomText';

type Props = {
  children?: React.ReactNode;
  onPress?: ((event: GestureResponderEvent) => void) | undefined,
  disabled?: boolean,
  style?: StyleProp<ViewStyle>,
  wrapperStyle?: StyleProp<ViewStyle>,
};

const CustomButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      style={[styles.button, props.style]}
      onPress={props.onPress}
    >
      <View style={[styles.wrapperStyle, props.wrapperStyle]}>
        <CustomText style={styles.buttonText}>
          {props.children}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

CustomButton.defaultProps = {
  children: null,
  onPress: undefined,
  disabled: false,
  style: null,
  wrapperStyle: null,
};

export default CustomButton;
