import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
} from 'react-native';
import { styles } from './CustomText.styles';

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>,
};

const CustomText: React.FC<Props> = ({ children, style}) => {
  return (
    <Text style={[styles.text, style]}>
      {children}
    </Text>
  );
};

CustomText.defaultProps = {
  children: null,
  style: null,
};

export default CustomText;
